require 'spec_helper'

describe "Static pages" do

  describe "Home page" do

    it "should have the content 'Sample App'" do
      visit '/static_pages/home'
      expect(page).to have_content('Sample App')
    end
  end

  describe "Help page" do

    it "should have the content 'Help'" do
      visit '/static_pages/help'
      expect(page).to have_content('Help')
    end
  end

  describe "About page" do

    it "should have the content 'About Us'" do
      visit '/static_pages/about'
      expect(page).to have_content('About Us')
    end
  end

  describe "Dashboard page" do

    it "should have the content 'Performance by State'" do
      visit '/demo/dashboard/dashboard.html'
      expect(page).to have_content('Performance by State')
      expect(page).to have_content('Churn Report')
    end
  end

end