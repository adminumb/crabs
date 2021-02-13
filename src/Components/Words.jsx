import faker from 'faker';

export const Words = (count = 10) => {
    return new Array(count)
        .fill('d')
        .map(_ => faker.random.word())
        .join(' ');
};


export default Words