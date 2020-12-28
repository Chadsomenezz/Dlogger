// GENERATE COMPLETE LOG
const generateNote = () => {
  const tempTextContainer = document.createElement('p');

  tempTextContainer.innerHTML = `${
    firstname.value !== ''
      ? '*First Name: ' + firstname.value + '&#13;&#10;'
      : ''
  }
${lastname.value !== '' ? '*Last Name: ' + lastname.value + '&#13;&#10;' : ''}
${
  serviceExpress.value !== ''
    ? '*Service Tag/Express Code: ' + serviceExpress.value + '&#13;&#10;'
    : ''
}
${ppid.value !== '' ? '*PPID: ' + ppid.value + '&#13;&#10;' : ''}

${
  phone_number.value !== ''
    ? '*Alternate Phone Number: ' + phone_number.value + '&#13;&#10;'
    : ''
}

${
  alt_phone_number.value !== ''
    ? '*Alternate Phone Number: ' + alt_phone_number.value + '&#13;&#10;'
    : ''
}
${
  email_address.value !== ''
    ? '*Email address: ' + email_address.value + '&#13;&#10;'
    : ''
}
${
  physical_address.value !== ''
    ? '*Physical Address: ' + physical_address.value + '&#13;&#10;'
    : ''
}
${
  acp.value !== ''
    ? '*ACP (Alternate Contact Person): ' + acp.value + '&#13;&#10;'
    : ''
}
${
  customer_issue.value !== ''
    ? "&#13;&#10;******&#13;&#10;*Customer's Issue: " +
      customer_issue.value +
      '&#13;&#10;&#13;&#10;'
    : ''
}
${
  probing.value !== ''
    ? '&#13;&#10;******&#13;&#10;*Probing: ' +
      probing.value +
      '&#13;&#10;&#13;&#10;'
    : ''
}
${
  troubleshooting.value !== ''
    ? '&#13;&#10;******&#13;&#10;*Troubleshooting: ' +
      troubleshooting.value +
      '&#13;&#10;&#13;&#10;'
    : ''
}

${
  resolution.value !== ''
    ? '&#13;&#10;******&#13;&#10;*Resolution: ' +
      resolution.value +
      '&#13;&#10;&#13;&#10;'
    : ''
}
${
  oracle.value !== ''
    ? '&#13;&#10;******&#13;&#10;*Oracle: ' + oracle.value + '&#13;&#10;'
    : ''
}

${
  bttr.value !== ''
    ? '*BTTR (Best Time To Reach): ' + bttr.value + '&#13;&#10;'
    : ''
}

${timezone.value !== 'N/A' ? '*Timezone: ' + timezone.value + '&#13;&#10;' : ''}
${
  test_email.value !== 'N/A'
    ? '*Test Email Receive?: ' + test_email.value + '&#13;&#10;'
    : ''
}
${
  hdd_data_loss.value !== 'N/A'
    ? '*HDD Data Loss: ' + hdd_data_loss.value + '&#13;&#10;'
    : ''
}
${
  tarp.value !== 'N/A'
    ? '*TARP (Told About Return Policy): ' + tarp.value + '&#13;&#10;'
    : ''
}
${vdi.value !== 'N/A' ? '*VDI: ' + vdi.value + '&#13;&#10;' : ''}
${
  cidar.value !== 'N/A'
    ? '*CIDAR Disclaimer: ' + cidar.value + '&#13;&#10;'
    : ''
}
${
  sms_offered.value !== 'N/A'
    ? '*SMS Offered: ' + sms_offered.value + '&#13;&#10;'
    : ''
}
${
  fru_to_cru.value !== 'N/A'
    ? '*FRU To Cru: ' + fru_to_cru.value + '&#13;&#10;'
    : ''
}
${
  cru_to_fru.value !== 'N/A'
    ? '*CRU To FRU: ' + cru_to_fru.value + '&#13;&#10;'
    : ''
}
${
  one_ad_per_year.value !== 'N/A'
    ? '*1 AD Per Year: ' + one_ad_per_year.value + '&#13;&#10;'
    : ''
}

`
    .trim()
    .replace(/\n|\r/g, '');

  if (confirm('Are you sure you want to copy the complete log ?')) {
    blank_text_area.value = tempTextContainer.innerText;
    /* Select the text field */
    blank_text_area.select();
    blank_text_area.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand('copy');
  }
};

// RESET THE ENTIRE LOG

const resetLog = () => {
  if (confirm('Are you sure you want to reset the log ? ')) {
    form_wrap.forEach((f) => {
      f.reset();
    });
  }
};

// Context Menu Open
const customContextMenu = (e) => {
  e.preventDefault();

  context_menu.style.left = e.clientX + 'px';
  context_menu.style.top = e.clientY + 'px';
  context_menu.style.display = 'block';

  // console.log("Mouse X" ,e.offsetX);
  // console.log("Mouse Y" ,e.offsetY);
  // console.log(e.clientY);
  // console.log("Page size X ", window.innerWidth);
  // console.log("Page size Y ", window.innerHeight);

  if (context_menu.offsetWidth + e.clientX > window.innerWidth) {
    context_menu.style.left = e.clientX - context_menu.offsetWidth + 'px';
  }
  if (context_menu.offsetHeight + e.clientY > window.innerHeight) {
    context_menu.style.top = e.clientY - context_menu.offsetHeight + 'px';
  }
};

// Context Menu Close
const removeContextMenu = () => {
  context_menu.style.display = 'none';
};





document.addEventListener("click",(e)=>{
  // document.querySelectorAll("input[type='text']").forEach(el=>{
  //   console.log(this);
  // });

  if(e.target.type === "textarea" || e.target.type === "text"){
    tempElement = e.target;
  }
  
})



// Copy,Cut,Paste
const copyText = () => {
  tempElement.select();
  document.execCommand('copy');
  console.log("copied");
};
const cutText = () => {
  tempElement.select();
  document.execCommand('cut');
};
const pasteText = () => {
  tempElement.select();
  navigator.clipboard.readText()
  .then(text=>tempElement.value = text);
};