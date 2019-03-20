import React from 'react'
import { object, func, string, bool } from 'prop-types'
import { Grid } from 'semantic-ui-react'
import ModalPageTemplate from '../../templates/ModalPageTemplate'
import ProductForm from '../../organisms/ProductForm'

const CreateEditProduct = ({
  title,
  item,
  handleAction,
  handleGoBack,
  isLoadingAction,
  btnContent,
}) => {
  return (
    <ModalPageTemplate title={title} handleGoBack={handleGoBack}>
      <Grid centered>
        <Grid.Column width={8}>
          <ProductForm
            item={item}
            handleAction={handleAction}
            isLoadingAction={isLoadingAction}
            btnContent={btnContent}
          />
        </Grid.Column>
      </Grid>
    </ModalPageTemplate>
  )
}
CreateEditProduct.propTypes = {
  title: string.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  handleGoBack: func.isRequired,
  isLoadingAction: bool.isRequired,
  btnContent: string,
}

export default CreateEditProduct
