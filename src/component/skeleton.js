
import { Skeleton } from "native-base";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import colors from "../assets/config/colors";




const SkeletonC = ({ width, height }) => {
    return (
        <View style={{ marginTop: 10, gap: 15, }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <View style={{ position: "absolute", left: 20, zIndex: 9, top: 10, }}>

                    <Skeleton
                        rounded="full"
                        h={20}
                        w={20}
                        background="#FFC76C"
                    />
                </View>
                <Skeleton
                    rounded="md"
                    h={200}
                    width={350}

                    background="#F6FEFB"
                >
                </Skeleton>
            </View>
            <View style={{ position: 'absolute', right: 10, top: 10 }}>

                <Skeleton
                    h={100}
                    w={230}
                    rounded="md"
                    background="#FFC76C"
                />
            </View>
            <View style={{ position: 'absolute', left: 20, bottom: 50}}>

                <Skeleton
                    h={7}
                    w={321}
                    rounded="sm"
                    background="#FFC76C"
                />
            </View>
            <View style={{ position: 'absolute', left: 20, bottom: 10 }}>

                <Skeleton
                    h={7}
                    w={321}
                    rounded="sm"
                    background="#FFC76C"
                />
            </View>

        </View>
    )


};


export default SkeletonC

export const SkeletonCircle =()=>{
    return(

        <Skeleton
        rounded="full"
        h={100}
        w={100}
        background="#FFC76C"
/>
    )
}