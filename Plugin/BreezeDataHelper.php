<?php

namespace Swissup\BreezeMagentoEnterprise\Plugin;

class BreezeDataHelper
{
    public function afterGetExcludeExceptionUrls(
        \Swissup\Breeze\Helper\Data $subject,
        array $result
    ) {
        $result[] = 'checkout/cart/configureFailed';
        $result[] = 'magento/advancedcheckout/sku/index';

        return $result;
    }
}
