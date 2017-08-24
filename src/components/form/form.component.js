import widges from './widges'
import {Form, FormItem} from 'element-ui'

export default {
    props:['options','bean'],
    methods:{
        onInput(option, value){
            this.$emit(option.model, value);
            this.bean[option.model] = value;
        }
    },
    render(h){
        return  <Form ref="form" style={{textAlign:'left'}} class={this.options.className} model={this.bean} label-width={this.options.labelWidth|| "80px"}>
                {
                    this._l(this.options.rows, row=>{
                        return  <FormItem label={row.label}>
                                    {widges[row.domain].renderElement.call(this._renderProxy, h, row, this.bean)}
                                </FormItem>                
                    })
                }        
                </Form>
    }
}