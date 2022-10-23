import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CircleButton, RectangleButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const NFTCard = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={{
            backgroundColor: COLORS.white, 
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
            }}>
            <View style={{ width: "100%", height: 250 }}>
                <Image 
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>
            <SubInfo />
            <View style={{ width: "100%", padding: SIZES.font }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <View style={{ 
                    marginTop: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    aligtnItems: 'center'
                }}>
                    <EthPrice price={data.price} />
                    <RectangleButton 
                        minWidth={120}
                        fontSize={SIZES.font}
                        //handlePress function will navigate to the details page of the specific nft card a user wants to view. In the navigate function you pass in the "Stack.screen" name you want to go to and the data you want to view on that screen. This is similar to ReactRouter
                        handlePress={() => navigation.navigate("Details", { data })}
                    />
                </View>
            </View>
        </View>
    )
}

export default NFTCard;