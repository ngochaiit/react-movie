/* eslint-disable react/no-multi-comp */
import React from 'react'
import PropTypes from 'prop-types'
import {
  List, makeStyles, Typography,
} from '@material-ui/core'

import NavigationListItem from './NavigationListItem'
import { matchPath } from '~/utils/router'
// import { useUser } from '~/redux/hooks/user'

const reduceChildRoutes = ({
  router, items, page, depth,
}) => {
  if (page.children) {
    const open = matchPath(router.pathname, {
      path: page.href,
      exact: false,
    })
    items.push(
      <NavigationListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={open}
        title={page.title}
        pathname={router.pathname}
      >
        <NavigationList
          depth={depth + 1}
          pages={page.children}
          router={router}
        />
      </NavigationListItem>,
    )
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
        pathname={router.pathname}
      />,

    )
  }

  return items
}

const NavigationList = ({ pages, ...rest }) => (
  <List>

    {pages.reduce(
      (items, page) => reduceChildRoutes({ items, page, ...rest }),
      [],
    )}
  </List>
)

NavigationList.propTypes = {
  depth: PropTypes.number.isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

const Navigation = ({
  title, pages, router, ...rest
}) => (
  <div
    {...rest}
  >
    {title && <Typography variant="caption">{title}</Typography>}
    <NavigationList
      depth={0}
      pages={pages}
      router={router}
    />
  </div>
  )

Navigation.defaultProps = {
}

Navigation.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
  router: PropTypes.shape().isRequired,
}

export default Navigation
