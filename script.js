
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-29 07:00:00", "b": 510.2}, {"a": "2024-10-29 07:05:00", "b": 521.8}, {"a": "2024-10-29 07:10:00", "b": 534.0}, {"a": "2024-10-29 07:15:00", "b": 516.6}, {"a": "2024-10-29 07:20:00", "b": 511.6666666666667}, {"a": "2024-10-29 07:25:00", "b": 518.4}, {"a": "2024-10-29 07:30:00", "b": 525.2}, {"a": "2024-10-29 07:35:00", "b": 564.0}, {"a": "2024-10-29 07:40:00", "b": 561.5}, {"a": "2024-10-29 07:45:00", "b": 562.6}, {"a": "2024-10-29 07:50:00", "b": 575.8}, {"a": "2024-10-29 07:55:00", "b": 584.5}, {"a": "2024-10-29 08:00:00", "b": 575.2}, {"a": "2024-10-29 08:05:00", "b": 583.0}, {"a": "2024-10-29 08:10:00", "b": 580.2}, {"a": "2024-10-29 08:15:00", "b": 574.0}, {"a": "2024-10-29 08:20:00", "b": 586.4}, {"a": "2024-10-29 08:25:00", "b": 594.4}, {"a": "2024-10-29 08:30:00", "b": 580.6}, {"a": "2024-10-29 08:35:00", "b": 577.75}, {"a": "2024-10-29 08:40:00", "b": 583.0}, {"a": "2024-10-29 08:45:00", "b": 579.4}, {"a": "2024-10-29 08:50:00", "b": 577.5}, {"a": "2024-10-29 08:55:00", "b": 582.0}, {"a": "2024-10-29 09:00:00", "b": 591.0}, {"a": "2024-10-29 09:05:00", "b": 581.75}, {"a": "2024-10-29 09:10:00", "b": 562.75}, {"a": "2024-10-29 09:15:00", "b": 564.8}, {"a": "2024-10-29 09:20:00", "b": 570.4}, {"a": "2024-10-29 09:25:00", "b": 584.6}, {"a": "2024-10-29 09:30:00", "b": 578.6}, {"a": "2024-10-29 09:35:00", "b": 568.6}, {"a": "2024-10-29 09:40:00", "b": 568.3333333333334}, {"a": "2024-10-29 09:45:00", "b": 558.0}, {"a": "2024-10-29 09:50:00", "b": 542.8}, {"a": "2024-10-29 09:55:00", "b": 536.2}, {"a": "2024-10-29 10:00:00", "b": 546.6}, {"a": "2024-10-29 10:05:00", "b": 558.0}, {"a": "2024-10-29 10:10:00", "b": 543.8}, {"a": "2024-10-29 10:15:00", "b": 532.6}, {"a": "2024-10-29 10:20:00", "b": 528.6}, {"a": "2024-10-29 10:25:00", "b": 531.25}, {"a": "2024-10-29 10:30:00", "b": 529.25}, {"a": "2024-10-29 10:35:00", "b": 527.6}, {"a": "2024-10-29 10:40:00", "b": 509.0}, {"a": "2024-10-29 10:45:00", "b": 511.0}, {"a": "2024-10-29 10:50:00", "b": 516.8}, {"a": "2024-10-29 10:55:00", "b": 504.6}, {"a": "2024-10-29 11:00:00", "b": 495.6}, {"a": "2024-10-29 11:05:00", "b": 505.0}, {"a": "2024-10-29 11:10:00", "b": 512.0}, {"a": "2024-10-29 11:15:00", "b": 508.3333333333333}, {"a": "2024-10-29 11:20:00", "b": 506.6}, {"a": "2024-10-29 11:25:00", "b": 507.75}, {"a": "2024-10-29 11:30:00", "b": 513.0}, {"a": "2024-10-29 11:35:00", "b": 515.25}, {"a": "2024-10-29 11:40:00", "b": 510.6}, {"a": "2024-10-29 11:45:00", "b": 499.0}, {"a": "2024-10-29 11:50:00", "b": 493.5}, {"a": "2024-10-29 11:55:00", "b": 494.8}, {"a": "2024-10-29 12:00:00", "b": 476.25}, {"a": "2024-10-29 12:05:00", "b": 479.5}, {"a": "2024-10-29 12:10:00", "b": 497.2}, {"a": "2024-10-29 12:15:00", "b": 490.4}, {"a": "2024-10-29 12:20:00", "b": 475.8}, {"a": "2024-10-29 12:25:00", "b": 481.75}, {"a": "2024-10-29 12:30:00", "b": 463.0}, {"a": "2024-10-29 12:35:00", "b": 460.0}, {"a": "2024-10-29 12:40:00", "b": 460.0}, {"a": "2024-10-29 12:45:00", "b": 471.8}, {"a": "2024-10-29 12:50:00", "b": 477.0}, {"a": "2024-10-29 12:55:00", "b": 473.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    