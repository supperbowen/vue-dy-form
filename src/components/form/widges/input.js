import {Input} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <Input  class={['form-widget', option.className]} type="datetime" placeholder={option.placeholder} value={bean[option.model]} on-input={v=>this.onInput(option, v)}>
                    {option.label}
                </Input>
    }
}