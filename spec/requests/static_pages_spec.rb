require 'spec_helper'

describe "Static pages" do

  describe "Home page" do
    before { visit root_path }

    it "should have the content 'Sample App'" do
       expect(page).to have_content('Home')
    end

    it "should have the base title" do
       expect(page).to have_title("Evolve Exec")
    end

    it "should not have a custom page title" do
       expect(page).not_to have_title('| Home')
    end
  end

  describe "Help page" do
    before { visit help_path }

    it "should have the content 'Help'" do
      expect(page).to have_content('Help')
    end

    it "should have the title 'Help'" do
      expect(page).to have_title("Evolve Exec | Help")
    end
  end

  describe "About page" do
    before { visit about_path }
    it "should have the content 'About Us'" do
      expect(page).to have_content('About Us')
    end

    it "should have the title 'About Us'" do
      expect(page).to have_title("Evolve Exec | About Us")
    end
  end

  describe "Contact page" do
    before { visit contact_path }
    it "should have the content 'Contact'" do
      expect(page).to have_content('Contact Us')
    end

    it "should have the title 'Contact'" do
      expect(page).to have_title("Evolve Exec | Contact")
    end
  end
end