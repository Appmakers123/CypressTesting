
  describe('Landing Page test', () => {
    it('Visit the Flipkart website', () => {
      cy.visit('https://flipkart.com')
     
    })
  })
  describe('Login Button test', () => {
    it('checked the login button', () => {
      // cy.visit('https://flipkart.com')
      cy.get('._1_3w1N').contains('Login')
    })

    it('click the login button', () => {
      // cy.visit('https://flipkart.com')
      cy.get('._1_3w1N').contains('Login').click()
    })
 
    it('click on cancel button on login page', () => {
      cy.get('._2doB4z').click()
    })
  })
  describe('Search Tab test', () => {
    it('enter input on search Tab', () => {
      cy.get('._3704LK').click();
      cy.wait(2500)
      cy.get('input[class="_3704LK"]').type("Samsung")
    })
    it('click on search button', () => {
      cy.get('.L0Z3Pu').wait(1500).click();
      cy.wait(1000)
    })
  })
  describe('Checking login page scenario',()=>{
    it('click on login page',()=>{
      cy.get('._1_3w1N').click()
    })
    it('click on login button directly to check whether we are getting error message or not',()=>
    {
      cy.get('._1D1L_j > ._2KpZ6l').click()
      cy.get('._2YULOR > span').contains('Please enter valid Email ID/Mobile number')
    })
    it('enter invalid user name-for mobile enter less than 10 digit',()=>{
      cy.get(':nth-child(1) > ._2IX_2-').type('123456');
      cy.get('._1D1L_j > ._2KpZ6l').click();
      cy.get('._2YULOR > span').contains('Please enter valid Email ID/Mobile number');
      
    })
    it('enter invalid user name-for mobile enter greater than 10 digit',()=>{
      cy.get(':nth-child(1) > ._2IX_2-').clear()
      cy.get(':nth-child(1) > ._2IX_2-').type('123456789012');
      cy.get('._1D1L_j > ._2KpZ6l').click();
      cy.get('._2YULOR > span').contains('Please enter valid Email ID/Mobile number');
      cy.get('.undefined > ._2IX_2-').clear()

    })
  
  it('enter invalid user name-for email enter invalid email',()=>
  {
    cy.get(':nth-child(1) > ._2IX_2-').clear()
    cy.get(':nth-child(1) > ._2IX_2-').type('sajh');
    cy.get('._1D1L_j > ._2KpZ6l').click();
    cy.get('._2YULOR > span').contains('Please enter valid Email ID/Mobile number');
    cy.get('.undefined > ._2IX_2-').clear()
    cy.get(':nth-child(1) > ._2IX_2-').type('sajh@kjkj');
    cy.get('._1D1L_j > ._2KpZ6l').click();
    cy.get('._2YULOR > span').contains('Please enter valid Email ID/Mobile number');
    cy.get('.undefined > ._2IX_2-').clear()
    cy.get(':nth-child(1) > ._2IX_2-').type('sajh@kjkj.');
    cy.get('._1D1L_j > ._2KpZ6l').click();

      cy.get('._2YULOR > span').contains('Please enter valid Email ID/Mobile number')

    cy.get('.undefined > ._2IX_2-').clear()


  })

  it('enter invalid Password- blank password',()=>
  {
    cy.get(':nth-child(1) > ._2IX_2-').clear()
    cy.get(':nth-child(1) > ._2IX_2-').type('9876543211');
    cy.get('._1D1L_j > ._2KpZ6l').click();
    cy.get('._2YULOR > span').contains("Please enter Password")
    })
    it('enter invalid Password- incorrect password',()=>
    {
      cy.get(':nth-child(1) > ._2IX_2-').clear()
      cy.get(':nth-child(1) > ._2IX_2-').type('9876543211');
      cy.get(':nth-child(2) > ._2IX_2-').type("asdfg")
      cy.get('._1D1L_j > ._2KpZ6l').click();
      //cy.get('._2YULOR > span').contains("Your username or password is incorrect")
      cy.get('._2sKwjB').contains('Maximum login attempts reached. Retry in 24 hours.')
      cy.get('._2doB4z').click()
      cy.get('._3_C9Hx').click()
      })
     
  })
  