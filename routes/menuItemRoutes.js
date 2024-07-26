const express = require('express');
const router= express.Router();
const MenuItem = require('./../models/Menu');

// Create a new menu item
router.post('/', async (req, res) => {
    try {
      const menuItem = new MenuItem(req.body);
      const response = await menuItem.save();
      res.status(201).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get all menu items
  router.get('/', async (req, res) => {
    try {
      const menuItems = await MenuItem.find();
      res.json(menuItems);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

    // Get all menu items teste type
    router.get('/:taste', async (req, res) => {
        try {
            const tasteType=req.params.taste
            if(tasteType=='sweet' || tasteType=='spicy' || tasteType=='sour'){
                const response=await MenuItem.find({taste:tasteType});
                console.log("response fetched");
                res.status(200).json(response);

            }
            else{
                res.status(404).json({error:"invalid taste type"})
            }
        //   const menuItems = await MenuItem.find();
        //   res.json(menuItems);

        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });


      // comment added
module.exports=router;