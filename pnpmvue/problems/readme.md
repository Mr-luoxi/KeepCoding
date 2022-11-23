# In case anyone encounters the same problem, below i am providing solution:

When one attempts to build each separate package inside the monorepo, rollup attempts to resolve @organization/package-name and include it in the build. You don't want that, so to avoid it upon building each package i am parsing package.json, extracting the dependencies field's keys, then to check against them inside the callback one can provide inside rollup config's external field. This will produce the desired outcome.

import json from "rollup-plugin-json";

const pkg = process.env.LERNA_PACKAGE_NAME &&
          require(`${process.env.LERNA_PACKAGE_NAME}/package.json`);

const dependencies = ({ dependencies }) => Object.keys(dependencies || {});

const pkgdependencies = dependencies(pkg);

/* exported rollup configuration */
const config = {
    /* your config goes here... */
    /* id is the source name if list of dependencies includes
     * id source name, then mark it as external,
     */
    external: id => pkgdependencies.includes(id)
};

export default config;