# Robot Market
## Deployed at 
https://robot-market.vercel.app
### Folder Structure in src
**assets** - Application level assets 
**components** - Application level components 
**config** - Configuration of the application (such as backend routes)
**context** - Application level context providers 
**global** - Application level css and constants 
**helpers** - helpers functions for the project 
**hooks** ->Application level custom hooks
**modules** - Sub-application for specific features 
**pages** - Application screens 
**types** - Collection of variable types 
### State management 
* Not frequently updated data such as robots, is provided via React Context.
* Frequently updated data, such as filters and carts are provided by light weight Jotai state library. Jotai can be found at https://github.com/pmndrs/jotai
### Responsiveness 
* Responsive for Desktop and Mobile screen size.
* Implemented gesture detector for right swiping mobile sized cart sheet to collapse . 

### User Experience 
* Avoided pagination due to the fact that users do not tend to arrive all pages 
* Easy to filter material

### Things to improve 
* For multiple lists, infinite loading should be used with the help of server
* Need more accessibility of elements for testing purpose 
### Screenshots

Desktop View
![alt Desktop](https://i.ibb.co/Dty37nq/ss1.png)
Mobile View 1
![alt Mobile](https://i.ibb.co/7RTmKK8/photo-2022-02-04-02-01-05.jpg)
Mobile View 2 
![alt Mobile](https://i.ibb.co/kMJW5KY/photo-2022-02-04-02-01-10.jpg)
