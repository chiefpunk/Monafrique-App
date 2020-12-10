import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Box,
  TextField,
  Chip,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { DropzoneArea } from 'material-ui-dropzone'

const categories = [
  'Accessories (scarves, bags, jewellery)',
  'decor',
  'Fashion',
  'body and beauty',
  'shoes',
  'furniture',
  'kids',
  'art (fine art)',
  "art (objets d'art)",
  'home & living (fragrances, functional items e.g plates)',
  'Tribal Art',
]
const local_currencies = ['usd', 'euro', 'naira', 'gbp']

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
  },
  mb2: {
    marginBottom: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}
function UploadProduct() {
  const classes = useStyles()
  const theme = useTheme()
  const [product, handleChange] = useForm({
    brand_name: '',
    brand_ehos: '',
    product_name: '',
    product_description: '',
    know_before_you_buy: '',
    sku: '',
    quantity: '',
    selectedCategories: [],
    colors: '',
    dimensions: '',
    selectedCurrencies: [],
    retail_price: '',
    sale_price: '',
    wholesale_quantity: '',
    wholesale_price: '',
    ppp: '',
    standard_usd: '',
    standard_euro: '',
    weight: '',
    volumetric_weight: '',
    upsells: '',
    crosssells: '',
    photo_drive_link: '',
  })

  const [mainProductImage, setMainProductImage] = React.useState([])
  const [imageWithDescription, setImagewithDescription] = React.useState([])
  const [fullScreenImage, setFullScreenImage] = React.useState([])
  const [knowBeforeImage, setKnowBeforeImage] = React.useState([])
  const [productGalleries, setProductGalleries] = React.useState([])

  console.log(mainProductImage[0])

  return (
    <div className={classes.root}>
      <h1>Upload product</h1>
      <form className={classes.form}>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Brand Name</InputLabel>
          <Input
            id="my-input"
            name="brand_name"
            value={product.brand_name}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Brand/ Collection Ethos</InputLabel>
          <Input
            id="my-input"
            name="brand_ethos"
            value={product.brand_ethos}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Use this field to tell us about your brand story, or the ethos
            behind the collection that this product belongs to. You only need to
            tell us your brand story once. Your collection ethos can change if
            you have multiple collections
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Product Name</InputLabel>
          <Input
            id="my-input"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Enter your unique product name
          </FormHelperText>
        </FormControl>
        <Box className={classes.mb2}>
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={['image/*']}
            dropzoneText={'Main product image'}
            onChange={(files) => setMainProductImage(files)}
          />
          <FormHelperText id="my-helper-text">
            This is your main product image, and should be about 602px by
            height: 772px (almost square size).
          </FormHelperText>
        </Box>
        <FormControl className={classes.mb2}>
          <TextField
            id="outlined-multiline-static"
            label="Product Description"
            multiline
            Product
            Description
            rows={4}
            name="product_description"
            value={product.product_description}
            onChange={handleChange}
            variant="outlined"
          />
          <FormHelperText id="my-helper-text">
            Sell your product, what's great about it? Describe how it's made.
            Why should customers love it? What's unique about it. What does it
            do? What can you wear it with?
          </FormHelperText>
        </FormControl>
        <Box className={classes.mb2}>
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={['image/*']}
            dropzoneText={'Image with description'}
            onChange={(files) => setImagewithDescription(files)}
          />
          <FormHelperText id="my-helper-text">
            This product image comes with another caption for you to provide
            more details on your product , especially if it's one of a kind.
            This is especially great for artworks to provide more background
            detail
          </FormHelperText>
        </Box>
        <Box className={classes.mb2}>
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={['image/*']}
            dropzoneText={'Full Screen Image'}
            onChange={(files) => setFullScreenImage(files)}
          />
          <FormHelperText id="my-helper-text">
            Attach a second product image (landscape size) mage Width: 1062px by
            Height: 573px)
          </FormHelperText>
        </Box>
        <Box className={classes.mb2}>
          <DropzoneArea
            filesLimit={1}
            acceptedFiles={['image/*']}
            dropzoneText={'Know Before You Buy Image'}
            onChange={(files) => setKnowBeforeImage(files)}
          />
          <FormHelperText id="my-helper-text">
            This section comes with descriptive subheadings headings to let
            customers know about nitty gritty details such as if the size runs
            big, if the product is for oily skin only, if the product is so
            unique it would take 14 days to make. Attach 1 more product image
            and input the important text in the next section.
          </FormHelperText>
        </Box>
        <FormControl className={classes.mb2}>
          <TextField
            id="outlined-multiline-static"
            label="Know Before you buy"
            multiline
            Product
            name="know_before_you_buy"
            value={product.know_before_you_buy}
            Description
            onChange={handleChange}
            rows={4}
            variant="outlined"
          />
          <FormHelperText id="my-helper-text">
            For example is it custom orders only? Write Custom orders: Specify
            how long it would take to make and ship. Put yourself in the shoes
            of the buyer what information you have liked to know, or would have
            been helpful to know before purchasing this product. Adding such
            information would minimise the likelihood of returns
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">SKU</InputLabel>
          <Input
            id="my-input"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            we'll generate an SKU, but if you have one enter it
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Quantity *</InputLabel>
          <Input
            id="my-input"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            How many of these do you have in stock for sale online?
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Categories</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            name="selectedCategories"
            multiple
            value={product.selectedCategories}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                value={category}
                style={getStyles(category, product.selectedCategories, theme)}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.mb2}>
          <TextField
            id="outlined-multiline-static"
            label="Colors"
            multiline
            name="colors"
            value={product.colors}
            onChange={handleChange}
            Product
            Description
            rows={4}
            variant="outlined"
          />
          <FormHelperText id="my-helper-text">
            In which colours do the product come? Are there multiple colours?
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">sizes/ various dimensions</InputLabel>
          <Input
            id="my-input"
            name="dimensions"
            value={product.dimensions}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Local currency</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            name="selectedCurrencies"
            value={product.selectedCurrencies}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {local_currencies.map((currency) => (
              <MenuItem
                key={currency}
                value={currency}
                style={getStyles(currency, product.selectedCategories, theme)}
              >
                {currency}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">
            Standard Retail Price in your local currency *
          </InputLabel>
          <Input
            id="my-input"
            name="retail_price"
            value={product.retail_price}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            How much does this item go for?
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Sale Price *</InputLabel>
          <Input
            id="my-input"
            name="sale_price"
            value={product.sale_price}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            We automatically list items on sale as part of our targeted
            marketing efforts. Please enter your preferred maximum percentage we
            can take off an item. For example, the maximum discount can be 20%.
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Wholesale quantity *</InputLabel>
          <Input
            id="my-input"
            name="wholesale_quantity"
            value={product.wholesale_quantity}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            What quantity of products do customers have to buy to get a
            wholesale price?
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Wholesale Price </InputLabel>
          <Input
            id="my-input"
            name="wholesale_price"
            value={product.wholesale_price}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            How much discount of the original price do you offer to customers
            buying in bulk e.g. 50% off
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel id="demo-simple-select-label">PPP adjusted? </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="ppp"
            value={product.ppp}
            onChange={handleChange}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">
            Standard USD currency price
          </InputLabel>
          <Input
            id="my-input"
            name="standard_usd"
            value={product.standard_usd}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Leave this field blank if we can convert the price of your product
            based on prevailing interest rates. However if you have different
            prices for different markets please list it here.
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">
            Standard Euro currency price
          </InputLabel>
          <Input
            id="my-input"
            name="standard_euro"
            value={product.standard_euro}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Leave this field blank if we can convert the price of your product
            based on prevailing interest rates. However if you have different
            prices for different markets please list it here.
          </FormHelperText>
        </FormControl>
        <FormControl component="fieldset" className={classes.mb2}>
          <FormLabel component="legend">Weight *</FormLabel>
          <RadioGroup
            aria-label="weight"
            name="weight"
            name="weight"
            value={product.weight}
            onChange={handleChange}
          >
            <FormControlLabel value="2.5" control={<Radio />} label="<2.5kg" />
            <FormControlLabel
              value="2.5-3kg"
              control={<Radio />}
              label="2.5-3kg"
            />
            <FormControlLabel
              value="3.1-5kg"
              control={<Radio />}
              label="3.1-5kg"
            />
            <FormControlLabel
              value="5.1-8kg"
              control={<Radio />}
              label="5.1-8kg"
            />
            <FormControlLabel
              value="8.1-10kg"
              control={<Radio />}
              label="8.1-10kg"
            />
            <FormControlLabel
              value="over 10kg"
              control={<Radio />}
              label="over 10kg"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">volumetric weight (kg)</InputLabel>
          <Input
            id="my-input"
            name="volumetric_weight"
            value={product.volumetric_weight}
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Up sells *</InputLabel>
          <Input
            id="my-input"
            value={product.upsells}
            name="upsells"
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Are there more expensive products that are similar or in the same
            subcategory as this one that customers may like? List their names
            below (list up to 4 products only
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Cross sells *</InputLabel>
          <Input
            id="my-input"
            value={product.crosssells}
            name="crosssells"
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Are there any products that go well with this product e.g. can be
            used together or complete a look, living room, setee. Please list
            them here
          </FormHelperText>
        </FormControl>
        <Box className={classes.mb2}>
          <DropzoneArea
            filesLimit={3}
            acceptedFiles={['image/*']}
            dropzoneText={'Product gallery images'}
            onChange={(files) => setProductGalleries(files)}
          />
          <FormHelperText id="my-helper-text">
            Attach a second product image (landscape size) mage Width: 1062px by
            Height: 573px)
          </FormHelperText>
        </Box>
        <FormControl className={classes.mb2}>
          <InputLabel htmlFor="my-input">Photo Drive Link</InputLabel>
          <Input
            id="my-input"
            value={product.photo_drive_link}
            name="photo_drive_link"
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            If you have photos already stored in a drive/dropbox please include
            the url link here
          </FormHelperText>
        </FormControl>
        <Box className={classes.footer}>
          <Button variant="contained" color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="secondary">
            Save
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default UploadProduct
