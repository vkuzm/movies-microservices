package com.service.movies.dto;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;

@Data
public class UpcomingCinemaDto {

  private String day;
  private String weekday;
  private List<CinemaDto> movies = new ArrayList<>();
}
