const fs = require('fs');

const files = [
    'src/pages/Services/Embedded/semiconductor/FirmwareDevelopment.jsx',
    'src/pages/Services/Embedded/semiconductor/RTOSDevelopment.jsx',
    'src/pages/Services/Embedded/semiconductor/EmbeddedLinux.jsx',
    'src/pages/Services/Embedded/semiconductor/BSPDevelopment.jsx',
    'src/pages/Services/Embedded/semiconductor/ProtocolIntegration.jsx',
    'src/pages/Services/Hardware/semiconductor/ASICDesign.jsx',
    'src/pages/Services/Hardware/semiconductor/CircuitDesign.jsx',
    'src/pages/Services/Hardware/semiconductor/FPGADesign.jsx',
    'src/pages/Services/Hardware/semiconductor/HardwarePrototyping.jsx',
    'src/pages/Services/Hardware/semiconductor/HardwareValidation.jsx',
    'src/pages/Services/Hardware/semiconductor/PcbDesign.jsx',
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('image: heroImage\n            }}')) {
        console.log(`Already modified: ${file}`);
        return;
    }
    
    // Some might use single quotes, some might use double quotes, handle \r\n and \n
    content = content.replace(/secondaryButtonText:\s*["']View Capabilities["'](\r?\n\s*)}\}/g, 'secondaryButtonText: "View Capabilities",$1    image: heroImage$1}}');
    
    fs.writeFileSync(file, content);
    console.log(`Modified: ${file}`);
});
