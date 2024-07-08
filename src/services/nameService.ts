export default function generateName() {
    let name: string = ''
    let characters: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
    let nameLength = 5

    for (let index = 0; index < nameLength; index++) {
       
        name += characters.charAt(
       Math.random() * characters.length)
    }

    return name
}