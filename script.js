
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-07 09:20:00", "b": 639.2}, {"a": "2024-11-07 09:25:00", "b": 632.6}, {"a": "2024-11-07 09:30:00", "b": 620.0}, {"a": "2024-11-07 09:35:00", "b": 620.75}, {"a": "2024-11-07 09:40:00", "b": 611.25}, {"a": "2024-11-07 09:45:00", "b": 601.25}, {"a": "2024-11-07 09:50:00", "b": 596.0}, {"a": "2024-11-07 09:55:00", "b": 597.2}, {"a": "2024-11-07 10:00:00", "b": 602.6}, {"a": "2024-11-07 10:05:00", "b": 600.0}, {"a": "2024-11-07 10:10:00", "b": 587.0}, {"a": "2024-11-07 10:15:00", "b": 596.2}, {"a": "2024-11-07 10:20:00", "b": 588.6}, {"a": "2024-11-07 10:25:00", "b": 593.25}, {"a": "2024-11-07 10:30:00", "b": 583.6}, {"a": "2024-11-07 10:35:00", "b": 582.0}, {"a": "2024-11-07 10:40:00", "b": 589.0}, {"a": "2024-11-07 10:45:00", "b": 586.0}, {"a": "2024-11-07 10:50:00", "b": 574.4}, {"a": "2024-11-07 10:55:00", "b": 579.75}, {"a": "2024-11-07 11:00:00", "b": 577.6666666666666}, {"a": "2024-11-07 11:05:00", "b": 574.25}, {"a": "2024-11-07 11:10:00", "b": 574.75}, {"a": "2024-11-07 11:15:00", "b": 574.4}, {"a": "2024-11-07 11:20:00", "b": 572.4}, {"a": "2024-11-07 11:25:00", "b": 567.6}, {"a": "2024-11-07 11:30:00", "b": 569.4}, {"a": "2024-11-07 11:35:00", "b": 571.0}, {"a": "2024-11-07 11:40:00", "b": 572.0}, {"a": "2024-11-07 11:45:00", "b": 565.6666666666666}, {"a": "2024-11-07 11:50:00", "b": 563.2}, {"a": "2024-11-07 11:55:00", "b": 565.2}, {"a": "2024-11-07 12:00:00", "b": 563.5}, {"a": "2024-11-07 12:05:00", "b": 552.3333333333334}, {"a": "2024-11-07 12:10:00", "b": 553.25}, {"a": "2024-11-07 12:15:00", "b": 573.6}, {"a": "2024-11-07 12:20:00", "b": 558.4}, {"a": "2024-11-07 12:25:00", "b": 552.6}, {"a": "2024-11-07 12:30:00", "b": 563.8}, {"a": "2024-11-07 12:35:00", "b": 557.6}, {"a": "2024-11-07 12:40:00", "b": 545.4}, {"a": "2024-11-07 12:45:00", "b": 555.75}, {"a": "2024-11-07 12:50:00", "b": 559.0}, {"a": "2024-11-07 12:55:00", "b": 538.4}, {"a": "2024-11-07 13:00:00", "b": 545.6}, {"a": "2024-11-07 13:05:00", "b": 550.0}, {"a": "2024-11-07 13:10:00", "b": 539.5}, {"a": "2024-11-07 13:15:00", "b": 541.0}, {"a": "2024-11-07 13:20:00", "b": 532.6}, {"a": "2024-11-07 13:25:00", "b": 540.2}, {"a": "2024-11-07 13:30:00", "b": 549.0}, {"a": "2024-11-07 13:35:00", "b": 544.0}, {"a": "2024-11-07 13:40:00", "b": 543.3333333333334}, {"a": "2024-11-07 13:45:00", "b": 543.8}, {"a": "2024-11-07 13:50:00", "b": 547.5}, {"a": "2024-11-07 13:55:00", "b": 540.25}, {"a": "2024-11-07 14:00:00", "b": 539.0}, {"a": "2024-11-07 14:05:00", "b": 523.6}, {"a": "2024-11-07 14:10:00", "b": 528.75}, {"a": "2024-11-07 14:15:00", "b": 530.25}, {"a": "2024-11-07 14:20:00", "b": 530.4}, {"a": "2024-11-07 14:25:00", "b": 530.5}, {"a": "2024-11-07 14:30:00", "b": 535.0}, {"a": "2024-11-07 14:35:00", "b": 533.3333333333334}, {"a": "2024-11-07 14:40:00", "b": 530.6666666666666}, {"a": "2024-11-07 14:45:00", "b": 526.4}, {"a": "2024-11-07 14:50:00", "b": 523.5}, {"a": "2024-11-07 14:55:00", "b": 530.2}, {"a": "2024-11-07 15:00:00", "b": 524.2}, {"a": "2024-11-07 15:05:00", "b": 523.8}, {"a": "2024-11-07 15:10:00", "b": 520.25}, {"a": "2024-11-07 15:15:00", "b": 520.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    