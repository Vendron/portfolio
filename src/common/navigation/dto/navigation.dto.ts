/**
 * @interface NavItem
 * @brief                           Represents a navigation item in the application's menu.
 * @description                     The NavItem interface defines the structure of each navigation item, 
 *                                  including its name displayed in the menu and the corresponding URL to navigate to.
 * 
 * @property {string} name          The display name of the navigation item.
 * @property {string} href          The URL path that the navigation item points to.
 * @property {string} hoverEffect   The CSS when hovering over an element
 */
export interface NavItem {
    name: string;
    href: string;
    hoverEffect: string;
}