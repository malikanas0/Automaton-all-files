import { demoqaverifyaddnewuser } from "./demoqalocator"

class Alltask {
    Taskno1() {
        cy.visit("https://demoqa.com/")
        cy.url().should('include','com')
        cy.get(demoqaverifyaddnewuser.navigatetoelement).eq(0).click()
        cy.get(demoqaverifyaddnewuser.clickonwebtales).click().should('have.id','item-3')
        cy.get(demoqaverifyaddnewuser.clickonaddbutton).click().should('have.text','Add')
        cy.get(demoqaverifyaddnewuser.adduserfirstname).type('Alden').should('have.value', 'Alden')
        cy.get(demoqaverifyaddnewuser.adduserlastname).type('Cantrell').should('have.value', 'Cantrell')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserEmail).type('test@test.com').should('have.value', 'test@test.com')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserage).type('30').should('have.value', '30')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.addusersalary).type('12345').should('have.value', '12345')
        cy.get(demoqaverifyaddnewuser.adduserdepartment).type('QA').should('have.value', 'QA')
        cy.get(demoqaverifyaddnewuser.clickonsubmitbtn).click().should('have.text','Submit')
    }

}
export const alltask = new Alltask