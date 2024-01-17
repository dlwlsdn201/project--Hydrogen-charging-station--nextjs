import { useStationsStore } from '@app/store/stations';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { IStationsState } from '@app/types/store/stations';
import { IStationData } from '@app/types/stations/stations';

interface IProps {
  stationData: IStationData;
}

const Marker = ({ stationData }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeModal } = useStationsStore((state: IStationsState) => state);

  const markerPosition = {
    // 인포윈도우가 표시될 위치입니다
    lat: Number(stationData['위도']),
    lng: Number(stationData['경도']),
  };

  return (
    <>
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        position={
          // 인포윈도우가 표시될 위치입니다
          markerPosition
        }
        clickable={true}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
      </MapMarker>
      {isOpen && (
        <CustomOverlayMap position={markerPosition} yAnchor={1.8} clickable={true}>
          <div className="flex justify-center w-auto font-normal text-black bg-slate-100 border-1 border-gray-300 flex-col px-2 py-2">
            <div className="text-sm mb-1 mx-auto">{stationData['충전소_명']}</div>
            <div className="flex justify-around gap-2">
              <Button
                className="w-[50%] h-6 text-xs"
                color="primary"
                size="sm"
                radius="sm"
                onClick={() => {
                  changeModal({
                    isOpen: true,
                    data: stationData,
                  });
                }}
              >
                상세 정보
              </Button>
              <Button
                className="w-[50%] h-6 text-xs"
                color="default"
                size="sm"
                radius="sm"
                onClick={() => setIsOpen(false)}
              >
                닫기
              </Button>
            </div>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
};

export default Marker;
