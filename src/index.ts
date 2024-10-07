
import { astGrep } from '@codemod.com/workflow'


export async function workflow() {
  await astGrep({
    id: "replace-serve-script",
    language: "json",
    rule: {
      pattern: {
        context: '{"serve": "webpack serve"}',
        selector: "pair",  
      }
    },
    fix: 'rspack serve',
  });
  
  await astGrep({
    id: "replace-serve-script",
    language: "json",
    rule: {
      pattern: {
        context: '{"build": "webpack build"}',
        selector: "pair",  
      }
    },
    fix: 'rspack build',
  });
}




// const webpackPattern = `"serve": "rspack serve"`;

// // Rule to replace 'webpack build' with 'rspack build'
// const replaceBuildScript = {
//   id: "rspack-build",
//   rule: {
//     pattern: {
//       context: '{"build": "webpack build"}',
//       selector: "pair",  
//     },
//     fix: '"build": "rspack build"',  // The replacement
//   },
// };

// export async function workflow({ files }: Api) {

//   await astGrep(replaceServeScript) 
//     .replace(webpackPattern);
  
//   console.log("Updated package.json scripts to use Rspack.");
// }
