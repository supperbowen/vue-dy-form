import {DatePicker} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <DatePicker  class={['form-widget', option.className]} type="date" placeholder={option.placeholder} value={bean[option.model]} on-input={v=>this.onInput(option,v)}>
                    {option.label}
                </DatePicker>
    }
}