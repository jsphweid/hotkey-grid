var glb = {};

glb.baseKeyDeclarations = {
  '\t' : glb.indent, 'ctrl+]' : glb.indent,
  'shift+\t' : glb.unindent, 'ctrl+[' : glb.unindent,
  'ctrl+shift+A' : glb.selectAll,
  'ctrl+d' : glb.deleteLine,
};

glb.thumbKeyDeclarations = {
    '+right' : glb.indentTree,
    '+left'  : glb.unindentTree,
    '+up' : glb.swapUp,
    '+down'  : glb.swapDown,
    '+enter' : glb.createSameLineBeginning,
};

var key, thumbKeyDec = {};
if (window.navigator.platform.match(/mac/i)) {
    for (key in glb.thumbKeyDeclarations) {
        thumbKeyDec['super' + key] = glb.thumbKeyDeclarations[key];
    }
    glb.keyDeclarations = $.extend({
        // b/c alt+right/left is what works on macs but I'm stomping on those for org-mode
        'ctrl+right' : glb.forwardWord,
        'ctrl+left' : glb.backwardWord,
    }, glb.baseKeyDeclarations, thumbKeyDec);
} else {
    for (key in glb.thumbKeyDeclarations) {
        thumbKeyDec['alt' + key] = glb.thumbKeyDeclarations[key];
    }
    glb.keyDeclarations = $.extend({
        // covered by the OS
        // 'super+right' : glb.forwardWord,
        // 'super+left' : glb.backwardWord,
    }, glb.baseKeyDeclarations, thumbKeyDec);
}

glb.loadKeyMaps = function(declaration) {
    var keyMaps = {};
    var modifierKeyCode = 0, keyCode, shift;
    for (var key in declaration) {
        modifierKeyCode = 0;
        shift = false;
        var keyString = key.toLowerCase();
        if (keyString.match(/ctrl/)) {   modifierKeyCode += 8; keyString = keyString.replace(/ctrl/i, ''); }
        if (keyString.match(/shift/)) {  modifierKeyCode += 4; keyString = keyString.replace(/shift/i, ''); shift = true; }
        if (keyString.match(/alt/)) {    modifierKeyCode += 2; keyString = keyString.replace(/alt/i, ''); }
        if (keyString.match(/super/)) {  modifierKeyCode += 1; keyString = keyString.replace(/super/i, ''); }
        keyString = keyString.replace(/\+/g, '');


        if (typeof keyMaps[modifierKeyCode] === 'undefined') { keyMaps[modifierKeyCode] = {}; }
        // http://css-tricks.com/snippets/javascript/javascript-keycodes/, missing #s 91-145, function keys,  number pad, + misc
        switch (keyString) {
        case '\n': case 'enter': case 'return': keyCode = '\r'.charCodeAt(); break;
        case 'backspace': keyCode = 8; break;
        case 'pause': keyCode = 19; break;
        case 'caps lock': keyCode = 20; break;
        case 'escape': keyCode = 27; break;
        case 'page up': keyCode = 33; break;
        case 'page down': keyCode = 34; break;
        case 'end': keyCode = 35; break;
        case 'home': keyCode = 36; break;
        case 'left': keyCode = 37; break;
        case 'up': keyCode = 38; break;
        case 'right': keyCode = 39; break;
        case 'down': keyCode = 40; break;
        case 'insert': keyCode = 45; break;
        case 'delete': keyCode = 46; break;
        case ';': keyCode = 186; break;
        case '=': keyCode = 187; break;
        case ',': keyCode = 188; break;
        case '-': keyCode = 189; break;
        case '.': keyCode = 190; break;
        case '/': keyCode = 191; break;
        case '`': keyCode = 192; break;
        case '[': keyCode = 219; break;
        case '\\': keyCode = 220; break;
        case ']': keyCode = 221; break;
        case "'": keyCode = 222; break;
        default: 
            // if (shift) { 
                keyString = keyString.toUpperCase();
            // }
            keyCode = keyString.charCodeAt(); break;
        }
        keyMaps[modifierKeyCode][ keyCode ] = declaration[key];
    }
    return keyMaps;
};

obj.keyMaps = glb.loadKeyMaps(glb.keyDeclarations);

obj.capturedKey = function(event, fire) {
    if (event.which === 17 || event.which === 16) return false;
    var modifierKeyCode = event.ctrlKey  * 8 + event.shiftKey * 4 + event.altKey * 2 + event.metaKey;
    var keyMap = obj.keyMaps[modifierKeyCode];
    if (typeof keyMap !== 'undefined') {
        if (typeof keyMap[event.which] === 'function') { 
            if (fire) {
                var m = obj.createModelFromTextarea();
                m = keyMap[event.which](m); // modify model with keybound function
                if (m) { // don't update if keybound function returned false
                    obj.updateTextareaFromModel(m);    
                }
            }
            return true;
        }
    }
};

$ta.on('keypress', function(event) {
    if (obj.capturedKey(event, true)) return false;
});

exports = glb;