import Noty from 'noty'
import Vue from 'vue'

import './styles.less'

const defaults = {
  layout: 'topRight',
  theme: 'mint',
  timeout: 2500,
  progressBar: true,
  closeWith: ['click'],
  icon: {
    success: ['fas', 'check-circle'],
    error: ['fas', 'times-circle'],
    warning: ['fas', 'exclamation-circle'],
    info: ['fas', 'info-circle']
  }
};

const VueNoty = {
  options: {},

  setOptions (opts) {
    if(opts.icon)
      this.options.icon = Object.assign({}, this.options.icon, opts.icon)
    
    this.options = Object.assign({}, defaults, opts);

    return this
  },

  create (params) {
    return new Noty(params)
  },

  // icon example: ['fal', 'check-circle']
  show (text, type = 'alert', opts = {}, icon = []) {
    let usedIcon = []
    if(icon.length > 0) {
      usedIcon = icon
    } else if(opts.icon && opts.icon[type] && opts.icon[type].length > 0) {
      usedIcon = opts.icon[type]
    } else if(this.options.icon && this.options.icon[type] && this.options.icon[type].length > 0) {
      usedIcon = this.options.icon[type]
    }
    
    const iconFormatted = usedIcon && usedIcon.length > 0
      ? `<i class="${usedIcon[0]} fa-${usedIcon[1]} noty_icon"></i> `
      : ''
    
    delete opts.icon // remove to prevent errors

    const params = Object.assign({}, this.options, opts, {
      type,
      text: `${iconFormatted}${text}`
    });

    const noty = this.create(params);
    noty.show();
    return noty;
  },

  success (text, opts = {}, icon = []) {
    return this.show(text, 'success', opts, icon)
  },

  error (text, opts = {}, icon = []) {
    return this.show(text, 'error', opts, icon)
  },

  warning (text, opts = {}, icon = []) {
    return this.show(text, 'warning', opts, icon)
  },

  info (text, opts = {}, icon = []) {
    return this.show(text, 'info', opts, icon)
  },

  closeAll (queueName){
    return Noty.closeAll(queueName);
  }

};

export default {
  install: function (Vue, opts) {
    const noty = VueNoty.setOptions(opts);
    Vue.prototype.$noty = noty;
    Vue.noty = noty
  }
}
