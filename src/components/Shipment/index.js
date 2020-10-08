/* eslint-disable no-unused-vars */
import React from 'react'
import Head from 'next/head'
import { ThemeProvider, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Layout from '~/components/common/Layout'
import Button from '../common/Button'
import CheckBox from '../common/CheckBox'
import Dropdown from '../common/Dropdown'

const style = (theme) => ({
  btn: {
    width: '150px',
    height: '50px',
  },
})
const top100Films = [
  { label: 'The Shawshank Redemption', value: 1994 },
  { label: 'The Godfather', value: 1972 },
  { label: 'The Godfather: Part II', value: 1974 },

]

function Shipment({ classes }) {
  return (
    <Layout>
      <div>ShipmentPage</div>
      <Button label="Demo Button" className={classes.btn} color="primary" />
      <CheckBox
        label="This is a delivery address"
      />
      <Dropdown options={top100Films} />
    </Layout>
  )
}

Shipment.propTypes = {
  classes: PropTypes.shape().isRequired,
}
export default withStyles(style)(Shipment)
