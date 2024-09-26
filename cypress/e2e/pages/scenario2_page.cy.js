import * as data from "../fixtures/elements.json"

class search{
    search_text(){
        cy.get(data.search_btn).click()
        cy.get(data.search_box).type('Nordea')
        cy.get(data.search_btn1).click()
       
    }
    check_result(){
        cy.get(data.results,{timeout: 60000}).should('have.length.greaterThan',1)
        
    }
    click_result(){
        cy.get(data.nordea).invoke('removeAttr', 'target').click()
    }
    get_person(){
        cy.get(data.title)
        .scrollIntoView()
        .should('contain.text','Mikael Spliid')
        .should('contain.text','Head of WMO IT Solutions')
        .should('contain.text','Nordea')
    }
}
const ltim = new search();
    export default ltim;
