import * as data from "../fixtures/elements.json"

class ltimindtree {
    enterURL() {
      cy.visit(data.url);
      cy.get(data.cookies)
      .should('be.visible').click();
      return this;
    }
    goto_life_science(){
      cy.get(data.industries).trigger('mouseover')
      cy.get(data.life_sciences).trigger('mouseover').click()
      cy.url().should('include','industries/life-sciences/')
    }
    click_submit(){
      cy.get(data.submit).scrollIntoView().click()
      cy.get(data.first_name).click()
      
    }
    verify_mandatory_assertions(){
      cy.get(data.error_msg).should('be.visible')
      cy.get(data.last_name).click()
      cy.get(data.error_msg).should('be.visible')
      cy.get(data.email).click()
      cy.get(data.error_msg).should('be.visible')
      cy.get(data.company).click()
      cy.get(data.error_msg).should('be.visible')
    }
    check_non_mandatory(){
      cy.get(data.phone).click()
      cy.get(data.error_msg).should('not.be.visible')
      cy.get(data.message).click()
      cy.get(data.error_msg).should('not.be.visible')
    }
    enter_info(){
      cy.get(data.first_name).type('Aakash')
      cy.get(data.last_name).type('chatta')
      cy.get(data.email).type('aakash.chatta@ltimindtree.com')
      cy.get(data.company).type('LTIMindtree')
    }
    agreeTC(){
      this.click_submit()
      cy.get(data.error_msg).should('be.visible')
      cy.get(data.TC).click()
    }
    select_country(){
      cy.get(data.country)
      .select('Denmark')
      .should('contain.text','Denmark')
    }
    check_no_of_countries(){
      cy.get(data.dropdown_list).should('have.length',203)
    }
    }
    const lti = new ltimindtree();
    export default lti;