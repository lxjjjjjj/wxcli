const merge =require('merge-webpack');
const base=require('./webpack.config')
const prodConfig={}
merge(base,prodConfig)