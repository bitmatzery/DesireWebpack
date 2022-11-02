# Desire

Desire on basic configuration of Webpack 5.

## Start using for a new project

`git clone <this repo>` - clone the repo
Run npm i to install dependencies

Run commands in terminal:

`start` - start development build

`dev` - development build

`build` - production build

`server` - development Server

`watch` - development build, monitoring changes & save changes

## Folder and file structure

```
├── src/                          # Sources
│   ├── assets                    # Folder for assets
│   │   └── fonts                 # Folder for connecting fonts
│   │   ├── img                   # Folder for storing pictures
│   ├── components                # Folder for components
│   ├── layouts                   # Folder for layouts
│   ├── pages                     # Folder for pages
│   ├── styles                    # Folder for styles
│   │   ├── fonts.scss            # Сonfiguration file of fonts
│   │   ├── main.scss             # File for connecting styles
│   │   ├── mixin.scss            # File for connecting mixins from the mixins folder
│   │   ├── nullstyle.scss        # File for Reset styles css
│   │   ├── variables.scss        # File for writing css or scss
│   └── index.html                # Main html file
└── .editorconfig                 # File with code formatting settings
└── .browserslistrc               # Web application target browser settings file
└── .babelrc                      # Babel configuration file
└── package.json                  # File with build settings and installed packages
└── postcss.config.js             # File for CSS post-processing tool configuration
└── webpack.config.js             # Webpack settings file
└── README.md                     # Assembly documentation
```
