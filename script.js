
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-06 17:30:00", "b": 409.0}, {"a": "2024-11-06 17:35:00", "b": 401.6666666666667}, {"a": "2024-11-06 17:40:00", "b": 402.5}, {"a": "2024-11-06 17:45:00", "b": 403.0}, {"a": "2024-11-06 17:50:00", "b": 401.5}, {"a": "2024-11-06 17:55:00", "b": 403.0}, {"a": "2024-11-06 18:00:00", "b": 407.5}, {"a": "2024-11-06 18:05:00", "b": 443.0}, {"a": "2024-11-06 18:10:00", "b": 451.25}, {"a": "2024-11-06 18:15:00", "b": 426.8}, {"a": "2024-11-06 18:20:00", "b": 414.5}, {"a": "2024-11-06 18:25:00", "b": 409.0}, {"a": "2024-11-06 18:30:00", "b": 409.0}, {"a": "2024-11-06 18:35:00", "b": 408.5}, {"a": "2024-11-06 18:40:00", "b": 410.0}, {"a": "2024-11-06 18:45:00", "b": 409.5}, {"a": "2024-11-06 18:50:00", "b": 407.6666666666667}, {"a": "2024-11-06 18:55:00", "b": 412.0}, {"a": "2024-11-06 19:00:00", "b": 608.6666666666666}, {"a": "2024-11-06 19:05:00", "b": 602.4}, {"a": "2024-11-06 19:10:00", "b": 598.75}, {"a": "2024-11-06 19:15:00", "b": 603.8}, {"a": "2024-11-06 19:20:00", "b": 604.6}, {"a": "2024-11-06 19:25:00", "b": 608.6}, {"a": "2024-11-06 19:30:00", "b": 614.6666666666666}, {"a": "2024-11-06 19:35:00", "b": 622.2}, {"a": "2024-11-06 19:40:00", "b": 617.2}, {"a": "2024-11-06 19:45:00", "b": 609.25}, {"a": "2024-11-06 19:50:00", "b": 617.8}, {"a": "2024-11-06 19:55:00", "b": 609.4}, {"a": "2024-11-06 20:00:00", "b": 638.6}, {"a": "2024-11-06 20:05:00", "b": 674.6}, {"a": "2024-11-06 20:10:00", "b": 702.5}, {"a": "2024-11-06 20:15:00", "b": 706.25}, {"a": "2024-11-06 20:20:00", "b": 688.0}, {"a": "2024-11-06 20:25:00", "b": 675.4}, {"a": "2024-11-06 20:30:00", "b": 656.8}, {"a": "2024-11-06 20:35:00", "b": 654.4}, {"a": "2024-11-06 20:40:00", "b": 639.8}, {"a": "2024-11-06 20:45:00", "b": 634.25}, {"a": "2024-11-06 20:50:00", "b": 635.0}, {"a": "2024-11-06 20:55:00", "b": 629.3333333333334}, {"a": "2024-11-06 21:00:00", "b": 625.5}, {"a": "2024-11-06 21:05:00", "b": 620.75}, {"a": "2024-11-06 21:10:00", "b": 618.4}, {"a": "2024-11-06 21:15:00", "b": 625.0}, {"a": "2024-11-06 21:20:00", "b": 605.25}, {"a": "2024-11-06 21:25:00", "b": 609.0}, {"a": "2024-11-06 21:30:00", "b": 624.0}, {"a": "2024-11-06 21:35:00", "b": 646.25}, {"a": "2024-11-06 21:40:00", "b": 636.8}, {"a": "2024-11-06 21:45:00", "b": 638.2}, {"a": "2024-11-06 21:50:00", "b": 626.4}, {"a": "2024-11-06 21:55:00", "b": 620.0}, {"a": "2024-11-06 22:00:00", "b": 620.5}, {"a": "2024-11-06 22:05:00", "b": 625.6}, {"a": "2024-11-06 22:10:00", "b": 615.6}, {"a": "2024-11-06 22:15:00", "b": 612.25}, {"a": "2024-11-06 22:20:00", "b": 615.3333333333334}, {"a": "2024-11-06 22:25:00", "b": 608.4}, {"a": "2024-11-06 22:30:00", "b": 610.4}, {"a": "2024-11-06 22:35:00", "b": 613.25}, {"a": "2024-11-06 22:40:00", "b": 614.5}, {"a": "2024-11-06 22:45:00", "b": 614.2}, {"a": "2024-11-06 22:50:00", "b": 612.6}, {"a": "2024-11-06 22:55:00", "b": 604.8}, {"a": "2024-11-06 23:00:00", "b": 600.0}, {"a": "2024-11-06 23:05:00", "b": 608.25}, {"a": "2024-11-06 23:10:00", "b": 603.0}, {"a": "2024-11-06 23:15:00", "b": 593.25}, {"a": "2024-11-06 23:20:00", "b": 596.0}, {"a": "2024-11-06 23:25:00", "b": 595.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    