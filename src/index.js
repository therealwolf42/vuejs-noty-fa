import Noty from 'noty'
import Vue from 'vue'

import './styles.less'

const defaults = {
  layout: 'topRight',
  theme: 'mint',
  timeout: 2500,
  progressBar: true,
  closeWith: ['click'],
};

const VueNoty = {
  options: {},

  setOptions (opts) {
    this.options = Object.assign({}, defaults, opts);
    return this
  },

  create (params) {
    return new Noty(params)
  },

  // icon example: ['fal', 'check-circle']
  show (text, type = 'alert', opts = {}, icon = []) {
    const iconFormatted = icon.length > 0 ? `<i class="${icon[0]} fa-${icon[1]}" style="margin-right:5px;"></i> ` : ''
    const params = Object.assign({}, this.options, opts, {
      type,
      text: `${iconFormatted}${text}`
    });

    const noty = this.create(params);
    noty.show();
    return noty;
  },

  success (text, opts = {}, icon = ['fal', 'check-circle']) {
    return this.show(text, 'success', opts, icon)
  },

  error (text, opts = {}, icon = ['fal', 'times-circle']) {
    return this.show(text, 'error', opts, icon)
  },

  warning (text, opts = {}, icon = ['fal', 'exclamation-circle']) {
    return this.show(text, 'warning', opts, icon)
  },

  info (text, opts = {}, icon = ['fal', 'info-circle']) {
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
