import{defineStep} from "cypress-cucumber-preprocessor/steps";


defineStep('client admin waits for {int} milliseconds',time => {
    cy.wait(time)
})

export function randomMail(){
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for(var ii=0; ii<15; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}
var email = string + '@yopmail.com';

return email
}

