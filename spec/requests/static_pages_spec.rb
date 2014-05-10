require 'spec_helper'

describe "Static pages" do

  describe "Home page" do

    it "should have the content 'Sample App'" do
      visit static_pages_home_path
      expect(page).to have_content('Home')
    end

    it "should have the base title" do
      visit static_pages_home_path
      expect(page).to have_title("Evolve Exec")
    end

    it "should not have a custom page title" do
      visit static_pages_home_path
      expect(page).not_to have_title('| Home')
    end
  end

  describe "Help page" do

    it "should have the content 'Help'" do
      visit static_pages_help_path
      expect(page).to have_content('Help')
    end

    it "should have the title 'Help'" do
      visit static_pages_help_path
      expect(page).to have_title("Evolve Exec | Help")
    end
  end

  describe "About page" do

    it "should have the content 'About Us'" do
      visit static_pages_about_path
      expect(page).to have_content('About Us')
    end

    it "should have the title 'About Us'" do
      visit static_pages_about_path
      expect(page).to have_title("Evolve Exec | About Us")
    end
  end

  describe "Contact page" do

    it "should have the content 'Contact'" do
      visit static_pages_contact_path
      expect(page).to have_content('Contact Us')
    end

    it "should have the title 'Contact'" do
      visit static_pages_contact_path
      expect(page).to have_title("Evolve Exec | Contact")
    end
  end
end