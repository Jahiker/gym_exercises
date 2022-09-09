import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exercisesOptions, youtubeOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDeatilData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
      setExerciseDetail(exerciseDeatilData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`, youtubeOptions);
      setExerciseVideo(exerciseVideoData.contents);

      const muscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDeatilData.target}`, exercisesOptions);
      setTargetMuscleExercises(muscleExerciseData)

      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDeatilData.equipment}`, exercisesOptions);
      setEquipmentExercises(equipmentExerciseData);

    }

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail