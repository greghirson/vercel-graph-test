
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-04 21:00:00", "b": 618.25}, {"a": "2024-11-04 21:05:00", "b": 609.0}, {"a": "2024-11-04 21:10:00", "b": 615.8}, {"a": "2024-11-04 21:15:00", "b": 603.4}, {"a": "2024-11-04 21:20:00", "b": 606.4}, {"a": "2024-11-04 21:25:00", "b": 614.8}, {"a": "2024-11-04 21:30:00", "b": 618.4}, {"a": "2024-11-04 21:35:00", "b": 616.0}, {"a": "2024-11-04 21:40:00", "b": 607.0}, {"a": "2024-11-04 21:45:00", "b": 624.8}, {"a": "2024-11-04 21:50:00", "b": 622.6}, {"a": "2024-11-04 21:55:00", "b": 596.6}, {"a": "2024-11-04 22:00:00", "b": 606.6}, {"a": "2024-11-04 22:05:00", "b": 633.6}, {"a": "2024-11-04 22:10:00", "b": 612.8}, {"a": "2024-11-04 22:15:00", "b": 594.4}, {"a": "2024-11-04 22:20:00", "b": 603.8}, {"a": "2024-11-04 22:25:00", "b": 615.0}, {"a": "2024-11-04 22:30:00", "b": 610.0}, {"a": "2024-11-04 22:35:00", "b": 599.8}, {"a": "2024-11-04 22:40:00", "b": 585.8}, {"a": "2024-11-04 22:45:00", "b": 606.0}, {"a": "2024-11-04 22:50:00", "b": 588.6}, {"a": "2024-11-04 22:55:00", "b": 596.5}, {"a": "2024-11-04 23:00:00", "b": 620.2}, {"a": "2024-11-04 23:05:00", "b": 613.0}, {"a": "2024-11-04 23:10:00", "b": 588.25}, {"a": "2024-11-04 23:15:00", "b": 583.4}, {"a": "2024-11-04 23:20:00", "b": 560.0}, {"a": "2024-11-04 23:25:00", "b": 556.8}, {"a": "2024-11-04 23:30:00", "b": 553.75}, {"a": "2024-11-04 23:35:00", "b": 550.75}, {"a": "2024-11-04 23:40:00", "b": 578.3333333333334}, {"a": "2024-11-04 23:45:00", "b": 557.6}, {"a": "2024-11-04 23:50:00", "b": 546.75}, {"a": "2024-11-04 23:55:00", "b": 548.3333333333334}, {"a": "2024-11-05 00:00:00", "b": 533.5}, {"a": "2024-11-05 00:05:00", "b": 522.75}, {"a": "2024-11-05 00:10:00", "b": 533.8}, {"a": "2024-11-05 00:15:00", "b": 510.6}, {"a": "2024-11-05 00:20:00", "b": 524.0}, {"a": "2024-11-05 00:25:00", "b": 515.8}, {"a": "2024-11-05 00:30:00", "b": 515.2}, {"a": "2024-11-05 00:35:00", "b": 519.2}, {"a": "2024-11-05 00:40:00", "b": 527.25}, {"a": "2024-11-05 00:45:00", "b": 520.25}, {"a": "2024-11-05 00:50:00", "b": 524.5}, {"a": "2024-11-05 00:55:00", "b": 504.6}, {"a": "2024-11-05 01:00:00", "b": 503.2}, {"a": "2024-11-05 01:05:00", "b": 475.0}, {"a": "2024-11-05 01:10:00", "b": 476.4}, {"a": "2024-11-05 01:15:00", "b": 472.25}, {"a": "2024-11-05 01:20:00", "b": 471.4}, {"a": "2024-11-05 01:25:00", "b": 464.2}, {"a": "2024-11-05 01:30:00", "b": 473.0}, {"a": "2024-11-05 01:35:00", "b": 481.8}, {"a": "2024-11-05 01:40:00", "b": 487.2}, {"a": "2024-11-05 01:45:00", "b": 463.5}, {"a": "2024-11-05 01:50:00", "b": 462.2}, {"a": "2024-11-05 01:55:00", "b": 465.4}, {"a": "2024-11-05 02:00:00", "b": 443.4}, {"a": "2024-11-05 02:05:00", "b": 450.2}, {"a": "2024-11-05 02:10:00", "b": 475.0}, {"a": "2024-11-05 02:15:00", "b": 485.6}, {"a": "2024-11-05 02:20:00", "b": 452.6}, {"a": "2024-11-05 02:25:00", "b": 427.25}, {"a": "2024-11-05 02:30:00", "b": 440.6}, {"a": "2024-11-05 02:35:00", "b": 453.8}, {"a": "2024-11-05 02:40:00", "b": 452.8}, {"a": "2024-11-05 02:45:00", "b": 445.75}, {"a": "2024-11-05 02:50:00", "b": 432.5}, {"a": "2024-11-05 02:55:00", "b": 416.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    