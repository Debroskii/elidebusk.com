import CMS from '@staticcms/core';
import '@staticcms/core/dist/main.css';

export default function Admin() {
    // Initialize Static CMS object
    CMS.init();
    // Now the registry is available via the CMS object.
    // CMS.registerPreviewTemplate('my-template', MyTemplate);
    return <></>
}