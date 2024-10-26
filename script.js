
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-25 12:10:00", "b": 617.6}, {"a": "2024-10-25 12:15:00", "b": 620.75}, {"a": "2024-10-25 12:20:00", "b": 620.2}, {"a": "2024-10-25 12:25:00", "b": 619.8}, {"a": "2024-10-25 12:30:00", "b": 621.75}, {"a": "2024-10-25 12:35:00", "b": 615.6666666666666}, {"a": "2024-10-25 12:40:00", "b": 610.0}, {"a": "2024-10-25 12:45:00", "b": 601.8}, {"a": "2024-10-25 12:50:00", "b": 607.25}, {"a": "2024-10-25 12:55:00", "b": 615.6}, {"a": "2024-10-25 13:00:00", "b": 606.8}, {"a": "2024-10-25 13:05:00", "b": 578.25}, {"a": "2024-10-25 13:10:00", "b": 574.4}, {"a": "2024-10-25 13:15:00", "b": 570.2}, {"a": "2024-10-25 13:20:00", "b": 553.0}, {"a": "2024-10-25 13:25:00", "b": 566.5}, {"a": "2024-10-25 13:30:00", "b": 555.2}, {"a": "2024-10-25 13:35:00", "b": 547.0}, {"a": "2024-10-25 13:40:00", "b": 554.2}, {"a": "2024-10-25 13:45:00", "b": 544.2}, {"a": "2024-10-25 13:50:00", "b": 552.75}, {"a": "2024-10-25 13:55:00", "b": 556.3333333333334}, {"a": "2024-10-25 14:00:00", "b": 528.4}, {"a": "2024-10-25 14:05:00", "b": 528.2}, {"a": "2024-10-25 14:10:00", "b": 529.0}, {"a": "2024-10-25 14:15:00", "b": 517.0}, {"a": "2024-10-25 14:20:00", "b": 506.0}, {"a": "2024-10-25 14:25:00", "b": 510.6}, {"a": "2024-10-25 14:30:00", "b": 499.0}, {"a": "2024-10-25 14:35:00", "b": 489.0}, {"a": "2024-10-25 14:40:00", "b": 496.0}, {"a": "2024-10-25 14:45:00", "b": 505.6}, {"a": "2024-10-25 14:50:00", "b": 498.0}, {"a": "2024-10-25 14:55:00", "b": 491.8}, {"a": "2024-10-25 15:00:00", "b": 494.0}, {"a": "2024-10-25 15:05:00", "b": 492.6666666666667}, {"a": "2024-10-25 15:10:00", "b": 481.3333333333333}, {"a": "2024-10-25 15:15:00", "b": 475.0}, {"a": "2024-10-25 15:20:00", "b": 484.2}, {"a": "2024-10-25 15:25:00", "b": 478.0}, {"a": "2024-10-25 15:30:00", "b": 472.4}, {"a": "2024-10-25 15:35:00", "b": 469.8}, {"a": "2024-10-25 15:40:00", "b": 493.75}, {"a": "2024-10-25 15:45:00", "b": 481.0}, {"a": "2024-10-25 15:50:00", "b": 469.25}, {"a": "2024-10-25 15:55:00", "b": 459.0}, {"a": "2024-10-25 16:00:00", "b": 470.6}, {"a": "2024-10-25 16:05:00", "b": 469.6666666666667}, {"a": "2024-10-25 16:10:00", "b": 448.25}, {"a": "2024-10-25 16:15:00", "b": 432.6}, {"a": "2024-10-25 16:20:00", "b": 456.0}, {"a": "2024-10-25 16:25:00", "b": 470.3333333333333}, {"a": "2024-10-25 16:30:00", "b": 463.4}, {"a": "2024-10-25 16:35:00", "b": 452.8}, {"a": "2024-10-25 16:40:00", "b": 450.4}, {"a": "2024-10-25 16:45:00", "b": 449.0}, {"a": "2024-10-25 16:50:00", "b": 446.4}, {"a": "2024-10-25 16:55:00", "b": 431.25}, {"a": "2024-10-25 17:00:00", "b": 430.2}, {"a": "2024-10-25 17:05:00", "b": 432.6666666666667}, {"a": "2024-10-25 17:10:00", "b": 422.8}, {"a": "2024-10-25 17:15:00", "b": 427.2}, {"a": "2024-10-25 17:20:00", "b": 440.4}, {"a": "2024-10-25 17:25:00", "b": 444.6}, {"a": "2024-10-25 17:30:00", "b": 440.3333333333333}, {"a": "2024-10-25 17:35:00", "b": 464.6}, {"a": "2024-10-25 17:40:00", "b": 483.5}, {"a": "2024-10-25 17:45:00", "b": 495.25}, {"a": "2024-10-25 17:50:00", "b": 504.75}, {"a": "2024-10-25 17:55:00", "b": 524.8}, {"a": "2024-10-25 18:00:00", "b": 530.0}, {"a": "2024-10-25 18:05:00", "b": 525.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    