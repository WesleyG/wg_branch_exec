module ApplicationHelper
  def color_list
    ["Aero blue","Air Force blue (RAF)","Air Force blue (USAF)","Air superiority blue","Alabama Crimson","Alice blue","Alizarin crimson","Alloy orange","Almond","Amaranth","Amazon","Amber",
              "SAE/ECE Amber (color)","American rose","Amethyst","Android Green","Anti-flash white","Antique brass","Antique bronze","Antique fuchsia "]
  end

  def icons
    File.readlines('icons.txt')
  end

  def extra_button_styles(with = nil)
    %w(lg sm xs)
  end

  def button_styles
    %w(normal lg sm xs)
  end

  def button_colors
    %w(default red blue green gray black lightblue gold sea brown)
  end

  def random_numbers(count, from=3, to=30)
    count.times.map{ from + Random.rand(to-from) }
  end

  def random_string(length=10)
    chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    password = ''
    length.times { password << chars[rand(chars.size)] }
    password
  end

  def current_link
    root_path = "/demo/"
    current_route = request.path.sub(root_path, "").split("/") # pages/dashboard/stats.html -> ['dashboard', 'stats.html']
    return current_route.first, current_route.last.split(".").first
  end

# 05/02/2014 WGG commenting out this, related to crumbs
  # def link_level
  #   primary, secondary = current_link
  #   if menu[primary.to_sym][:items].keys.count > 1
  #     return 2
  #   else
  #     return 1
  #   end
  # end

  def nav_collapse(options = {})
    @primary, @secondary = current_link
    return "collapsed" unless options[:primary] == @primary
  end

  def nav_active(options = {})
    @primary, @secondary = current_link

    if options[:primary]
      return "active" if options[:primary] == @primary
    end

    if options[:secondary]
      return "active" if options[:secondary] == @secondary
    end
  end

  def menu
    return {
        dashboard: {
            primary: { link: "dashboard", icon: "icon-dashboard", label: "Dashboard" },
            items: {
                dashboard: { icon: "icon-dashboard", label: "Dashboard" }
            }
        },
        # WGG rmemoving menu items
        #ui_lab: {
        #    primary: { link: "buttons", icon: "icon-beaker", label: "UI Lab" },
        #    items: {
        #        buttons: { icon: "icon-hand-up",       label: "Buttons" },
        #        general: { icon: "icon-beaker",        label: "General elements" },
        #        icons:   { icon: "icon-info-sign",     label: "Icons"},
        #        grid:    { icon: "icon-th-large",      label: "Grid"},
        #        tables:  { icon: "icon-table",         label: "Tables"},
        #        widgets: { icon: "icon-plus-sign-alt", label: "Widgets"},
        #    }
        #},
        forms: {
            primary: { link: "forms", icon: "icon-group", label: "Agencies" },
            items: {
                forms: { icon: "icon-edit", label: "Form Elements" }
            }
        },
        charts: {
            primary: { link: "charts", icon: "icon-sitemap", label: "Internal"},
            items: {
                charts: { icon: "icon-bar-chart", label: "Charts"}
            }
        },
        #other: {
        #    primary: { link: "wizard", icon: "icon-link", label: "Others"},
        #    items: {
        #        wizard: { icon: "icon-magic", label: "Wizard" },
        #        login: { icon: "icon-user", label: "Login Page" },
        #        sign_up: { icon: "icon-user", label: "Sign Up Page" },
        #        full_calendar: { icon: "icon-calendar", label: "Full Calendar" },
        #        error404: { icon: "icon-ban-circle", label: "Error 404 page" },
        #    }
        #}
    }
  end

# WGG 05/02/2014 - this kept causing issues, commenting out
=begin
  def crumbs
    primary, secondary = current_link
    return {
        primary:   {
          icon: menu[primary.to_sym][:primary][:icon],
          label: menu[primary.to_sym][:primary][:label]},
        secondary: {
            icon:  menu[primary.to_sym][:items][secondary.to_sym][:icon],
            label: menu[primary.to_sym][:items][secondary.to_sym][:label]
        }
    }
  end
=end

end
