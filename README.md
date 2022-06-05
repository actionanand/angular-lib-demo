# AngularLibDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## Creating angular workspace without angular app

```bash
$ ng new my-workspace --no-create-application
$ cd my-workspace
$ ng generate library my-lib
```

> we can create libraries with angular app also

```bash
$ cd my-workspace
$ ng generate library my-lib --prefix=demo
```

> This adds a `projects` directory containing a `my-lib` directory for our newly generated `my-workspace` Angular workspace.

```bash
ng generate application my-app
```

> This adds a `my-app` directory in the `projects` directory

### testing library in dev

```bash
$ ng build my-lib --configuration development
$ ng test my-lib
$ ng lint my-lib
```

### Building library

```bash
ng build my-lib
```

### Serving our appliaction

```bash
ng serve my-app
```

### Publishing your library

```bash
$ ng build my-lib
$ cd dist/my-lib
$ npm publish
```

### Managing assets in a library

When including additional assets like Sass mixins or pre-compiled CSS. You need to add these manually to the conditional `exports` in the package.json of the primary entrypoint.

[ng-packagr](https://www.npmjs.com/package/ng-packagr) will merge handwritten `exports` with the auto-generated ones, allowing for library authors to configure additional export subpaths, or custom conditions.

```json
"exports": {
  ".": {
    "sass": "./_index.scss",
  },
  "./theming": {
    "sass": "./_theming.scss"
  },
  "./prebuilt-themes/indigo-pink.css": {
    "style": "./prebuilt-themes/indigo-pink.css"
  }
}
```

### Building and rebuilding your library

```bash
ng build my-lib --watch
```

### Linking already built with watch mode to Angular app

```bash
$ cd dist/my-lib
$ npm link
```

Now open the seperate angular app where you want to test it

```bash
npm link my-lib
```

If you already have `my-lib` it installed through npm

```bash
npm uninstall my-lib
```

add the following to the root `package.json` file

```json
"scripts": {
  ...
  "build_lib": "ng build my-lib",
  "npm_pack": "cd dist/my-lib && npm pack",
  "package": "npm run build_lib && npm run npm_pack"
},
```

```
npm install ../angular-lib-demo/dist/my-lib/my-lib-0.0.1.tgz
```

```typescript
import { AngularLibDemoModule } from 'my-lib';
```

### Support Docs

- [Creating libraries - Official](https://angular.io/guide/creating-libraries)
- [The Angular Library Series - Creating a Library with Angular CLI](https://medium.com/angular-in-depth/creating-a-library-in-angular-6-87799552e7e5)