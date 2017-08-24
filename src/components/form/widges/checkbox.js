import {Checkbox} from 'element-ui'

export default {
    renderElement(h, option, bean){
        return  <Checkbox class={['form-widget', option.className]} value={bean[option.model]} on-input={v=>this.onInput(option, v)}>
                    {option.label}
                </Checkbox>
    }
}