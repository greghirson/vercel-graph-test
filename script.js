
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-04 18:00:00", "b": 455.5}, {"a": "2025-03-04 18:05:00", "b": 439.6}, {"a": "2025-03-04 18:10:00", "b": 426.5}, {"a": "2025-03-04 18:15:00", "b": 411.75}, {"a": "2025-03-04 18:20:00", "b": 407.0}, {"a": "2025-03-04 18:25:00", "b": 405.5}, {"a": "2025-03-04 18:30:00", "b": 405.0}, {"a": "2025-03-04 18:35:00", "b": 403.6666666666667}, {"a": "2025-03-04 18:40:00", "b": 401.25}, {"a": "2025-03-04 18:45:00", "b": 404.0}, {"a": "2025-03-04 18:50:00", "b": 403.5}, {"a": "2025-03-04 19:00:00", "b": 407.25}, {"a": "2025-03-04 19:05:00", "b": 477.0}, {"a": "2025-03-04 19:10:00", "b": 518.2}, {"a": "2025-03-04 19:15:00", "b": 487.2}, {"a": "2025-03-04 19:20:00", "b": 490.4}, {"a": "2025-03-04 19:25:00", "b": 510.0}, {"a": "2025-03-04 19:30:00", "b": 492.0}, {"a": "2025-03-04 19:35:00", "b": 489.25}, {"a": "2025-03-04 19:40:00", "b": 504.5}, {"a": "2025-03-04 19:45:00", "b": 504.4}, {"a": "2025-03-04 19:50:00", "b": 508.25}, {"a": "2025-03-04 19:55:00", "b": 498.25}, {"a": "2025-03-04 20:00:00", "b": 508.0}, {"a": "2025-03-04 20:05:00", "b": 495.3333333333333}, {"a": "2025-03-04 20:10:00", "b": 493.4}, {"a": "2025-03-04 20:15:00", "b": 501.6}, {"a": "2025-03-04 20:20:00", "b": 512.2}, {"a": "2025-03-04 20:25:00", "b": 517.3333333333334}, {"a": "2025-03-04 20:30:00", "b": 513.8}, {"a": "2025-03-04 20:35:00", "b": 501.2}, {"a": "2025-03-04 20:40:00", "b": 528.8}, {"a": "2025-03-04 20:45:00", "b": 566.5}, {"a": "2025-03-04 20:50:00", "b": 575.0}, {"a": "2025-03-04 20:55:00", "b": 577.75}, {"a": "2025-03-04 21:00:00", "b": 580.4}, {"a": "2025-03-04 21:05:00", "b": 590.5}, {"a": "2025-03-04 21:10:00", "b": 587.4}, {"a": "2025-03-04 21:15:00", "b": 610.4}, {"a": "2025-03-04 21:20:00", "b": 621.2}, {"a": "2025-03-04 21:25:00", "b": 602.4}, {"a": "2025-03-04 21:30:00", "b": 594.5}, {"a": "2025-03-04 21:35:00", "b": 596.2}, {"a": "2025-03-04 21:40:00", "b": 614.5}, {"a": "2025-03-04 21:45:00", "b": 618.4}, {"a": "2025-03-04 21:50:00", "b": 621.75}, {"a": "2025-03-04 21:55:00", "b": 632.6}, {"a": "2025-03-04 22:00:00", "b": 638.4}, {"a": "2025-03-04 22:05:00", "b": 618.6}, {"a": "2025-03-04 22:10:00", "b": 627.8}, {"a": "2025-03-04 22:15:00", "b": 613.4}, {"a": "2025-03-04 22:20:00", "b": 592.75}, {"a": "2025-03-04 22:25:00", "b": 587.6666666666666}, {"a": "2025-03-04 22:30:00", "b": 583.4}, {"a": "2025-03-04 22:35:00", "b": 571.4}, {"a": "2025-03-04 22:40:00", "b": 565.2}, {"a": "2025-03-04 22:45:00", "b": 555.0}, {"a": "2025-03-04 22:50:00", "b": 564.0}, {"a": "2025-03-04 22:55:00", "b": 547.6}, {"a": "2025-03-04 23:00:00", "b": 541.6}, {"a": "2025-03-04 23:05:00", "b": 531.4}, {"a": "2025-03-04 23:10:00", "b": 529.0}, {"a": "2025-03-04 23:15:00", "b": 546.8}, {"a": "2025-03-04 23:20:00", "b": 538.4}, {"a": "2025-03-04 23:25:00", "b": 540.0}, {"a": "2025-03-04 23:30:00", "b": 521.0}, {"a": "2025-03-04 23:35:00", "b": 514.2}, {"a": "2025-03-04 23:40:00", "b": 520.25}, {"a": "2025-03-04 23:45:00", "b": 527.75}, {"a": "2025-03-04 23:50:00", "b": 520.0}, {"a": "2025-03-04 23:55:00", "b": 529.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    