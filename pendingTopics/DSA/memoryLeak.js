let obj = {data:new Array(1000000)} //potential leak
obj = null // allow GC
