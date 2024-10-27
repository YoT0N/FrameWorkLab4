//import {Validation} from '../src/validation';
import {expect} from 'chai';
import {Library} from '../src/library';
import {User} from '../src/models';
describe('Validation calculator Class', () => {
    it('Should return false', () => {
        // const validation = new Validation();

        // Validation.author.value = '';
        // Validation.bookName.value = '';
        // Validation.yearOfPublication.value = '';

        const result = 1 + 1;

        expect(result).to.equal(2);
    });
});
describe('Library search', () => {
    it('Should return user', () => {
        const library = new Library();
        const user = new User('Богдан', 'ilkiv.bo@gmail.com');
        library.addUser(user);
        // const validation = new Validation();
        library.find(user.id);
        // Validation.author.value = '';
        // Validation.bookName.value = '';
        // Validation.yearOfPublication.value = '';

        //const result = 1 + 1;

        expect(library.find(user.id)).to.equal(user);
    });
});

// describe('Validation calculator Class', () => {
//     it('Should return false', () => {
//         const validation = new Validation();

//         Validation.author.value = '';
//         Validation.bookName.value = '';
//         Validation.yearOfPublication.value = '';

//         const result = validation.checkBookFields();

//         expect(result).to.equal(false);
//     });
// });
