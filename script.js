
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-08 21:30:00", "b": 568.0}, {"a": "2024-11-08 21:35:00", "b": 593.8}, {"a": "2024-11-08 21:40:00", "b": 596.8}, {"a": "2024-11-08 21:45:00", "b": 575.6}, {"a": "2024-11-08 21:50:00", "b": 570.6}, {"a": "2024-11-08 21:55:00", "b": 572.0}, {"a": "2024-11-08 22:00:00", "b": 571.5}, {"a": "2024-11-08 22:05:00", "b": 572.5}, {"a": "2024-11-08 22:10:00", "b": 575.8}, {"a": "2024-11-08 22:15:00", "b": 574.6666666666666}, {"a": "2024-11-08 22:20:00", "b": 571.6666666666666}, {"a": "2024-11-08 22:25:00", "b": 573.4}, {"a": "2024-11-08 22:30:00", "b": 564.0}, {"a": "2024-11-08 22:35:00", "b": 560.4}, {"a": "2024-11-08 22:40:00", "b": 560.0}, {"a": "2024-11-08 22:45:00", "b": 553.5}, {"a": "2024-11-08 22:50:00", "b": 541.8}, {"a": "2024-11-08 22:55:00", "b": 540.25}, {"a": "2024-11-08 23:00:00", "b": 543.4}, {"a": "2024-11-08 23:05:00", "b": 543.0}, {"a": "2024-11-08 23:10:00", "b": 544.5}, {"a": "2024-11-08 23:15:00", "b": 534.6}, {"a": "2024-11-08 23:20:00", "b": 544.8}, {"a": "2024-11-08 23:25:00", "b": 538.3333333333334}, {"a": "2024-11-08 23:30:00", "b": 540.0}, {"a": "2024-11-08 23:35:00", "b": 531.2}, {"a": "2024-11-08 23:40:00", "b": 526.4}, {"a": "2024-11-08 23:45:00", "b": 524.2}, {"a": "2024-11-08 23:50:00", "b": 523.4}, {"a": "2024-11-08 23:55:00", "b": 506.0}, {"a": "2024-11-09 00:00:00", "b": 504.75}, {"a": "2024-11-09 00:05:00", "b": 511.75}, {"a": "2024-11-09 00:10:00", "b": 518.25}, {"a": "2024-11-09 00:15:00", "b": 505.25}, {"a": "2024-11-09 00:20:00", "b": 508.2}, {"a": "2024-11-09 00:25:00", "b": 498.4}, {"a": "2024-11-09 00:30:00", "b": 494.0}, {"a": "2024-11-09 00:35:00", "b": 485.0}, {"a": "2024-11-09 00:40:00", "b": 491.8}, {"a": "2024-11-09 00:45:00", "b": 504.0}, {"a": "2024-11-09 00:50:00", "b": 493.2}, {"a": "2024-11-09 00:55:00", "b": 488.0}, {"a": "2024-11-09 01:00:00", "b": 483.8}, {"a": "2024-11-09 01:05:00", "b": 474.4}, {"a": "2024-11-09 01:10:00", "b": 478.8}, {"a": "2024-11-09 01:15:00", "b": 485.75}, {"a": "2024-11-09 01:20:00", "b": 476.8}, {"a": "2024-11-09 01:25:00", "b": 470.0}, {"a": "2024-11-09 01:30:00", "b": 459.2}, {"a": "2024-11-09 01:35:00", "b": 456.0}, {"a": "2024-11-09 01:40:00", "b": 456.8}, {"a": "2024-11-09 01:45:00", "b": 462.8}, {"a": "2024-11-09 01:50:00", "b": 449.5}, {"a": "2024-11-09 01:55:00", "b": 443.8}, {"a": "2024-11-09 02:00:00", "b": 446.25}, {"a": "2024-11-09 02:05:00", "b": 441.6}, {"a": "2024-11-09 02:10:00", "b": 451.6}, {"a": "2024-11-09 02:15:00", "b": 440.8}, {"a": "2024-11-09 02:20:00", "b": 428.6666666666667}, {"a": "2024-11-09 02:25:00", "b": 433.25}, {"a": "2024-11-09 02:30:00", "b": 430.0}, {"a": "2024-11-09 02:35:00", "b": 430.4}, {"a": "2024-11-09 02:40:00", "b": 443.2}, {"a": "2024-11-09 02:45:00", "b": 427.8}, {"a": "2024-11-09 02:50:00", "b": 424.2}, {"a": "2024-11-09 02:55:00", "b": 426.0}, {"a": "2024-11-09 03:00:00", "b": 423.75}, {"a": "2024-11-09 03:05:00", "b": 417.4}, {"a": "2024-11-09 03:10:00", "b": 417.75}, {"a": "2024-11-09 03:15:00", "b": 432.0}, {"a": "2024-11-09 03:20:00", "b": 423.6}, {"a": "2024-11-09 03:25:00", "b": 425.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    