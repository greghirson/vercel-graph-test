
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-09 06:00:00", "b": 410.75}, {"a": "2024-11-09 06:05:00", "b": 418.6}, {"a": "2024-11-09 06:10:00", "b": 430.0}, {"a": "2024-11-09 06:15:00", "b": 433.8}, {"a": "2024-11-09 06:20:00", "b": 436.6}, {"a": "2024-11-09 06:25:00", "b": 441.75}, {"a": "2024-11-09 06:30:00", "b": 441.8}, {"a": "2024-11-09 06:35:00", "b": 449.0}, {"a": "2024-11-09 06:40:00", "b": 456.5}, {"a": "2024-11-09 06:45:00", "b": 468.0}, {"a": "2024-11-09 06:50:00", "b": 471.4}, {"a": "2024-11-09 06:55:00", "b": 463.6}, {"a": "2024-11-09 07:00:00", "b": 491.2}, {"a": "2024-11-09 07:05:00", "b": 491.4}, {"a": "2024-11-09 07:10:00", "b": 496.6}, {"a": "2024-11-09 07:15:00", "b": 516.4}, {"a": "2024-11-09 07:20:00", "b": 504.0}, {"a": "2024-11-09 07:25:00", "b": 497.0}, {"a": "2024-11-09 07:30:00", "b": 493.2}, {"a": "2024-11-09 07:35:00", "b": 494.6}, {"a": "2024-11-09 07:40:00", "b": 495.6}, {"a": "2024-11-09 07:45:00", "b": 507.4}, {"a": "2024-11-09 07:50:00", "b": 522.6}, {"a": "2024-11-09 07:55:00", "b": 521.4}, {"a": "2024-11-09 08:00:00", "b": 522.5}, {"a": "2024-11-09 08:05:00", "b": 519.75}, {"a": "2024-11-09 08:10:00", "b": 529.75}, {"a": "2024-11-09 08:15:00", "b": 533.3333333333334}, {"a": "2024-11-09 08:20:00", "b": 523.6666666666666}, {"a": "2024-11-09 08:25:00", "b": 534.2}, {"a": "2024-11-09 08:30:00", "b": 537.8}, {"a": "2024-11-09 08:35:00", "b": 544.5}, {"a": "2024-11-09 08:40:00", "b": 552.0}, {"a": "2024-11-09 08:45:00", "b": 564.25}, {"a": "2024-11-09 08:50:00", "b": 568.2}, {"a": "2024-11-09 08:55:00", "b": 578.2}, {"a": "2024-11-09 09:00:00", "b": 625.2}, {"a": "2024-11-09 09:05:00", "b": 695.0}, {"a": "2024-11-09 09:10:00", "b": 710.8}, {"a": "2024-11-09 09:15:00", "b": 734.8}, {"a": "2024-11-09 09:20:00", "b": 764.0}, {"a": "2024-11-09 09:25:00", "b": 779.0}, {"a": "2024-11-09 09:30:00", "b": 780.75}, {"a": "2024-11-09 09:35:00", "b": 746.6}, {"a": "2024-11-09 09:40:00", "b": 754.6}, {"a": "2024-11-09 09:45:00", "b": 780.0}, {"a": "2024-11-09 09:50:00", "b": 745.8}, {"a": "2024-11-09 09:55:00", "b": 713.0}, {"a": "2024-11-09 10:00:00", "b": 696.25}, {"a": "2024-11-09 10:05:00", "b": 683.6}, {"a": "2024-11-09 10:10:00", "b": 685.4}, {"a": "2024-11-09 10:15:00", "b": 702.25}, {"a": "2024-11-09 10:20:00", "b": 720.25}, {"a": "2024-11-09 10:25:00", "b": 740.8}, {"a": "2024-11-09 10:30:00", "b": 755.5}, {"a": "2024-11-09 10:35:00", "b": 763.5}, {"a": "2024-11-09 10:40:00", "b": 778.2}, {"a": "2024-11-09 10:45:00", "b": 785.8}, {"a": "2024-11-09 10:50:00", "b": 762.6}, {"a": "2024-11-09 10:55:00", "b": 750.75}, {"a": "2024-11-09 11:00:00", "b": 725.8}, {"a": "2024-11-09 11:05:00", "b": 715.6}, {"a": "2024-11-09 11:10:00", "b": 709.6666666666666}, {"a": "2024-11-09 11:15:00", "b": 722.25}, {"a": "2024-11-09 11:20:00", "b": 755.0}, {"a": "2024-11-09 11:25:00", "b": 741.2}, {"a": "2024-11-09 11:30:00", "b": 715.8}, {"a": "2024-11-09 11:35:00", "b": 708.0}, {"a": "2024-11-09 11:40:00", "b": 696.0}, {"a": "2024-11-09 11:45:00", "b": 696.0}, {"a": "2024-11-09 11:50:00", "b": 707.4}, {"a": "2024-11-09 11:55:00", "b": 699.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    