import ru from './ru.json'
import uz from './uz.json'

export const defaultLocale: string = 'ru'

type MessageSchema = typeof ru

export const languages: Record<string, MessageSchema> = {
    ru,
    uz,
};