import { openRouter } from '../lib/ai'
import { streamText } from 'ai'


export default {
    async generateRecipe(prompt: string) {

        const result = streamText({
            model: openRouter('nvidia/nemotron-3-super-120b-a12b:free'),
            system: "Eres un bartender que tiene 50 años de experiencia",
            temperature: 0, 
            prompt
        })

        return result.textStream
    }

}