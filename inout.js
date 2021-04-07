const dataInput = [
    {
      group: "Group A",
      industry: [
        "Aditya A Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Steel Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
    {
      group: "Group A",
      industry: [
        "Aditya A Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Iron Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
    {
      group: "Group A",
      industry: [
        "Aman A Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Steel Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
    {
      group: "Group A",
      industry: [
        "Aman A Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Iron Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
    {
      group: "Group B",
      industry: [
        "Aditya B Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Steel Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
    {
      group: "Group B",
      industry: [
        "Aditya B Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Iron Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
    {
      group: "Group B",
      industry: [
        "Aditya B Craft & Paper Pvt. Ltd.",
        "Somewhere, Cuttack, Odisha",
        "India, 753004",
      ],
      category: "Paper Industries",
      contactDetails: [
        "Mr S.K. Podakar",
        "Production Manager",
        "s.k.podakar@gmail.com, 4783739271",
      ],
      CPCBCode: "CP26784512",
      GBD: "Yes",
      actions: [
        {
          title: "Details",
          action: "#details",
        },
        {
          title: "Live Data",
          action: "#liveData",
        },
      ],
    },
  ];
  const DataOutput = [
    {
      key: 1,
      group: "Group A",
      children: [
        {
          industry: [
            "Aditya A Craft & Paper Pvt. Ltd.",
            "Somewhere, Cuttack, Odisha",
            "India, 753004",
          ],
          children: [
            {
              category: "Steel Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
            {
              category: "Iron Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
          ],
        },
        {
          industry: [
            "Aman A Craft & Paper Pvt. Ltd.",
            "Somewhere, Cuttack, Odisha",
            "India, 753004",
          ],
          children: [
            {
              category: "Steel Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
            {
              category: "Iron Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 1,
      group: "Group B",
      children: [
        {
          industry: [
            "Aditya B Craft & Paper Pvt. Ltd.",
            "Somewhere, Cuttack, Odisha",
            "India, 753004",
          ],
          children: [
            {
              category: "Steel Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
            {
              category: "Iron Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
            {
              category: "Paper Industries",
              contactDetails: [
                "Mr S.K. Podakar",
                "Production Manager",
                "s.k.podakar@gmail.com, 4783739271",
              ],
              CPCBCode: "CP26784512",
              GBD: "Yes",
              actions: [
                {
                  title: "Details",
                  action: "#details",
                },
                {
                  title: "Live Data",
                  action: "#liveData",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  function prepareListForGroups(inputArr) {
    let obj = {};
  
    inputArr.forEach((element) => {
      if (!obj.hasOwnProperty(element.group)) obj[element.group] = [];
      obj[element.group].push(element);
    //   delete element.group;
    });
    
    let outArr = [];
    let count = 1;
    Object.keys(obj).forEach((key) => {
      let x = {
        key: count++,
        group: key, // key = GROUP 1
        children: obj[key], // obj['GROUP 1'], this is an array
      };
      outArr.push(x);
    });
    return outArr;
  }

function prepareIndustryData() {
    let outArr = prepareListForGroups(dataInput);
    outArr.forEach(ele => {
        let newChildObj = {};
        ele.children.forEach(child => {
            if(!newChildObj.hasOwnProperty(JSON.stringify(child.industry)))
            newChildObj[JSON.stringify(child.industry)] = [];
            newChildObj[JSON.stringify(child.industry)].push(child);
            delete child.group;
            delete child.industry;
        })
        let newChildArr = [];
        Object.keys(newChildObj).forEach(key => {
            let newChildArrObj = {
                industry: JSON.parse(key),
                children: newChildObj[key]
            }
            newChildArr.push(newChildArrObj);
        })
        ele.children = newChildArr
    })
    return outArr;
}
  
let finalOutput = prepareIndustryData();
console.log(finalOutput);

