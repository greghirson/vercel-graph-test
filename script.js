
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-03 18:00:00", "b": 459.2}, {"a": "2025-02-03 18:05:00", "b": 486.8}, {"a": "2025-02-03 18:10:00", "b": 479.2}, {"a": "2025-02-03 18:15:00", "b": 464.0}, {"a": "2025-02-03 18:20:00", "b": 466.0}, {"a": "2025-02-03 18:25:00", "b": 462.6666666666667}, {"a": "2025-02-03 18:30:00", "b": 462.3333333333333}, {"a": "2025-02-03 18:35:00", "b": 458.6666666666667}, {"a": "2025-02-03 18:40:00", "b": 452.8}, {"a": "2025-02-03 18:45:00", "b": 454.0}, {"a": "2025-02-03 18:50:00", "b": 455.0}, {"a": "2025-02-03 18:55:00", "b": 465.0}, {"a": "2025-02-03 19:00:00", "b": 460.6}, {"a": "2025-02-03 19:05:00", "b": 469.2}, {"a": "2025-02-03 19:10:00", "b": 467.0}, {"a": "2025-02-03 19:15:00", "b": 476.3333333333333}, {"a": "2025-02-03 19:20:00", "b": 481.25}, {"a": "2025-02-03 19:25:00", "b": 477.2}, {"a": "2025-02-03 19:30:00", "b": 469.25}, {"a": "2025-02-03 19:35:00", "b": 470.2}, {"a": "2025-02-03 19:40:00", "b": 478.25}, {"a": "2025-02-03 19:45:00", "b": 469.8}, {"a": "2025-02-03 19:50:00", "b": 473.8}, {"a": "2025-02-03 19:55:00", "b": 476.3333333333333}, {"a": "2025-02-03 20:00:00", "b": 475.0}, {"a": "2025-02-03 20:05:00", "b": 475.0}, {"a": "2025-02-03 20:10:00", "b": 469.75}, {"a": "2025-02-03 20:15:00", "b": 463.75}, {"a": "2025-02-03 20:20:00", "b": 475.2}, {"a": "2025-02-03 20:25:00", "b": 480.5}, {"a": "2025-02-03 20:30:00", "b": 477.0}, {"a": "2025-02-03 20:35:00", "b": 476.8}, {"a": "2025-02-03 20:40:00", "b": 544.8}, {"a": "2025-02-03 20:45:00", "b": 572.3333333333334}, {"a": "2025-02-03 20:50:00", "b": 562.0}, {"a": "2025-02-03 20:55:00", "b": 561.5}, {"a": "2025-02-03 21:00:00", "b": 578.75}, {"a": "2025-02-03 21:05:00", "b": 582.4}, {"a": "2025-02-03 21:10:00", "b": 578.0}, {"a": "2025-02-03 21:15:00", "b": 576.2}, {"a": "2025-02-03 21:20:00", "b": 576.8}, {"a": "2025-02-03 21:25:00", "b": 583.6}, {"a": "2025-02-03 21:30:00", "b": 582.2}, {"a": "2025-02-03 21:35:00", "b": 572.8}, {"a": "2025-02-03 21:40:00", "b": 577.8}, {"a": "2025-02-03 21:45:00", "b": 583.5}, {"a": "2025-02-03 21:50:00", "b": 584.0}, {"a": "2025-02-03 21:55:00", "b": 594.4}, {"a": "2025-02-03 22:00:00", "b": 662.4}, {"a": "2025-02-03 22:05:00", "b": 687.0}, {"a": "2025-02-03 22:10:00", "b": 679.0}, {"a": "2025-02-03 22:15:00", "b": 676.8}, {"a": "2025-02-03 22:20:00", "b": 654.4}, {"a": "2025-02-03 22:25:00", "b": 641.8}, {"a": "2025-02-03 22:30:00", "b": 632.3333333333334}, {"a": "2025-02-03 22:35:00", "b": 626.5}, {"a": "2025-02-03 22:40:00", "b": 620.25}, {"a": "2025-02-03 22:45:00", "b": 621.4}, {"a": "2025-02-03 22:50:00", "b": 607.25}, {"a": "2025-02-03 22:55:00", "b": 600.0}, {"a": "2025-02-03 23:00:00", "b": 592.8}, {"a": "2025-02-03 23:05:00", "b": 588.25}, {"a": "2025-02-03 23:10:00", "b": 583.4}, {"a": "2025-02-03 23:15:00", "b": 570.75}, {"a": "2025-02-03 23:20:00", "b": 570.75}, {"a": "2025-02-03 23:25:00", "b": 568.2}, {"a": "2025-02-03 23:30:00", "b": 566.0}, {"a": "2025-02-03 23:35:00", "b": 563.4}, {"a": "2025-02-03 23:40:00", "b": 558.8}, {"a": "2025-02-03 23:45:00", "b": 547.6}, {"a": "2025-02-03 23:50:00", "b": 543.4}, {"a": "2025-02-03 23:55:00", "b": 543.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    