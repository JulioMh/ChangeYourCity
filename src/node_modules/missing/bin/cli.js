#!/usr/bin/env node

'use strict';

var childProc = require('child_process');
var path = require('path');

console.log('Checking all modules have been added to package.json');

childProc.exec('ls',{cwd: './node_modules'}, function(err, stdout) {
  if(err) {
    console.log('Error: ' + err);
    process.exit(1);
  }

  var folders = stdout.toString().trim().split('\n');
  var pkg = require(path.join(__dirname, '../../../', 'package.json'));
  var dependencies = (Object.keys(pkg.dependencies || {})).concat((Object.keys(pkg.devDependencies || {})));
  var missing = [];

  for(var i=0; i < folders.length; i++) {
    if(dependencies.indexOf(folders[i]) < 0) {
      missing.push(folders[i]);
    }
  }

  if(missing.length > 0) {
    console.log('The follwing modules have not been added to your package.json');
    for(var x=0; x < missing.length; x++) {
      console.log('- ' + missing[x]);
    }
    process.exit(1);
  } else {
    console.log('DONE: all modules are in package.json');
    process.exit(0);
  }

});


